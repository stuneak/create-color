function getHash (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function hashToHsl (hash) {
  var r = ((hash & 0xff0000) >> 16) / 255;
  var g = ((hash & 0x00ff00) >> 8) / 255;
  var b = (hash & 0x0000ff) / 255;

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);

  var h = 0;
  var s = 0;
  var l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function hashToRgb (hash) {
  var r = (hash & 0xff0000) >> 16;
  var g = (hash & 0x00ff00) >> 8;
  var b = hash & 0x0000ff;
  return "rgb(" + r + "," + g + "," + b + ")";
}

function hashToHex (hash) {
  var c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + ("00000".substring(0, 6 - c.length) + c);
}

/**
 * Generate the permanent color from any string, array or object.
 *
 * @param {string || object || array} [str] The string to generate.
 *
 * @param {string} [format="hex"] The format of the returned color.
 *
 * @return {string} Color.
 *
 * @example
 * import createColor from "create-color"
 * const hsl = createColor("canThereBeAnyText", "hsl") //=> "hsl(290, 93%, 33%)"
 *
 * @name createColor
 */

function createColor (str, format) {
  str = String(JSON.stringify(str));
  format = format || "hex";
  format = format.toString().toLowerCase();

  var allFormats = {
    hex: hashToHex(getHash(str)),
    rgb: hashToRgb(getHash(str)),
    hsl: hashToHsl(getHash(str))
  };

  if (typeof allFormats[format] === "undefined") {
    throw new Error(
      "Format '" +
        format +
        "' was not found. The following formats are available: " +
        Object.keys(allFormats)
    );
  } else {
    return allFormats[format];
  }
}

module.exports = createColor;
