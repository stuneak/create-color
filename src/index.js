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
 * const hsl = createColor("canThereBeAnyText", "hsl") //=> "hsl(290, 93%, 33%)"
 *
 * @name createColor
 */

const createColor = (str, format = "hex") => {
  const getHash = str => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  str = String(JSON.stringify(str));
  format = format.toString().toLowerCase();

  const allFormats = {
    hex: hashToHex(getHash(str)),
    rgb: hashToRgb(getHash(str)),
    hsl: hashToHsl(getHash(str))
  };

  if (allFormats[format] === undefined) {
    throw new Error(
      `Format ${format} was not found. The following formats are available: ${Object.keys(
        allFormats
      )}`
    );
  }

  return allFormats[format];
};

export default createColor;
