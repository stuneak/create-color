import { hashToHex } from "./hashToHex";
import { hashToHsl } from "./hashToHsl";
import { hashToRgb } from "./hashToRgb";

/**
 * Generate the permanent color from any string, array or object.
 *
 * @param {string || object || array} [str] The parameter to generate hash
 *
 * @param {string} [format="hex"] The format of the returned color.
 *
 * @return {string} color.
 *
 * @example
 * import createColor from "create-color"
 * const hsl = createColor("canThereBeAnyText", "hsl")
 *
 * @name createColor
 */

const createColor = (str, args = { format: "hex" }) => {
  if (str == null) {
    throw new TypeError(
      `[X] You didn't specify an input parameter for the hash`
    );
  }

  if (
    Object.prototype.toString.call(args) === "[object Object]" &&
    args.format === undefined
  ) {
    throw new TypeError(`[X] You didn't specify the format`);
  }

  const format = args.format.toString().toLowerCase();

  const hash = getHash(str);
  const allFormats = {
    hex: hashToHex(hash),
    rgb: hashToRgb(hash),
    hsl: hashToHsl(hash)
  };

  if (allFormats[format] === undefined) {
    throw new ReferenceError(
      `[X] Unknown format: ${format}. The following formats are available: ${Object.keys(
        allFormats
      )}`
    );
  }

  return allFormats[format];
};

const getHash = str => {
  const s = JSON.stringify(str);
  return s.split("").reduce((a, _, i) => (a += s.charCodeAt(i) + (a << 5)), 0);
};

export default createColor;
