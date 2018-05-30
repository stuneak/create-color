import hashToHex from "./hashToHex";
import hashToHsl from "./hashToHsl";
import hashToRgb from "./hashToRgb";

/**
 * Generate the permanent color from any string, array or object.
 *
 * @param {string || object || array} [str] The string to generate.
 *
 * @param {string} [format="hex"] The format of the returned color.
 *
 * @return {string} color.
 *
 * @example
 * import createColor from "create-color"
 * const hsl = createColor("canThereBeAnyText", "hsl") //=> "hsl(96,71%,46%)"
 *
 * @name createColor
 */

const createColor = (str, format = "hex") => {
  if (str == null) {
    throw new TypeError(`[X] You did not specify input parameters`);
  }

  const getHash = s =>
    s.split("").reduce((a, _, i) => (a += s.charCodeAt(i) + (a << 5)), 0);

  str = JSON.stringify(str);
  format = format.toString().toLowerCase();

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

export default createColor;
