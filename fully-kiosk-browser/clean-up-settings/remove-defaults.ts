import { differenceWith } from "npm:remeda@2";
import defaultSettings from "./default-settings.json" with { type: "json" };
import fullSettings from "./fully-settings.json" with { type: "json" };

function sortByKey(entries: [string, unknown][]) {
  return entries.sort(([key1], [key2]) => key1.localeCompare(key2));
}

function toEntries(obj: object) {
  const entries = Object.entries(obj);
  return sortByKey(entries);
}

function fromEntries(entries: [string, unknown][]) {
  const sortedEntries = sortByKey(entries);
  return Object.fromEntries(sortedEntries);
}

function toPrettyJson(obj: object) {
  return JSON.stringify(obj, null, 2);
}

const diffEntries = differenceWith(
  toEntries(fullSettings),
  toEntries(defaultSettings),
  // compare the values of the entries
  ([key1, value1], [key2, value2]) =>
    key1 === key2 && JSON.stringify(value1) === JSON.stringify(value2),
);

const diff = fromEntries(diffEntries);

console.log(diff);

await Deno.writeTextFile(
  `${import.meta.dirname}/../fully-settings.json`,
  toPrettyJson(diff),
);
