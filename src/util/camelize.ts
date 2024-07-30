import camelCase from "lodash/camelCase";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import transform from "lodash/transform";

const camelize = (obj: any) =>
  transform(obj, (acc: Object | Array<any>, value, key, target) => {
    const camelKey = isArray(target)
      ? key
      : camelCase(
          typeof key === "number" || typeof key === "symbol"
            ? key.toString()
            : key
        );

    acc[camelKey] = isObject(value) ? camelize(value) : value;
  });

export default camelize;
