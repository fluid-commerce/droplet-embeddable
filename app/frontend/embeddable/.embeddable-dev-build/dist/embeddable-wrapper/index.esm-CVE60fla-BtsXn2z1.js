import { n as nt, r as reactExports } from './embeddable-component-BD9bezsm.js';

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

export { Value as V, useEmbeddableState as a, defineComponent as d, loadData as l, useTheme as u };
//# sourceMappingURL=index.esm-CVE60fla-BtsXn2z1.js.map

//# sourceMappingURL=index.esm-CVE60fla-BtsXn2z1.js.map