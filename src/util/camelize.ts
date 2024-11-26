import camelCase from "lodash/camelCase";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import transform from "lodash/transform";

const camelize = (obj: any) =>
  transform(obj, (acc: { [key: string]: any }, value, key, target) => {
    const camelKey = isArray(target) ? String(key) : camelCase(String(key));

    acc[camelKey] = isObject(value) ? camelize(value) : value;
  });

export default camelize;
