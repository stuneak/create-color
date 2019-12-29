const createColor = require("../lib");
const colorTocolor = require("colorcolor");

const errorsMsg = {
  inputNotFound: `[X] You didn't specify an input parameter for the hash`,
  errorFormat: (format) => `
      [X] Unknown format: ${format}. 
      The following formats are available: ${['hex', 'rgb', 'hsl'].join(",")}
    `
};

const generalСonfigurations = {
  str: {
    value: "canThereBeAnyText",
    colors: {
      hex: "#67cb22",
      hsl: "hsl(96,71%,46%)",
      rgb: "rgb(103,203,34)"
    }
  },
  arr: {
    value: ["random", "color", "generation"],
    colors: { hex: "#dab388", hsl: "hsl(31,53%,69%)", rgb: "rgb(218,179,136)" }
  },
  obj: {
    value: { name: "Andrey", age: 27, role: "user" },
    colors: {
      hex: "#f6555d",
      hsl: "hsl(357,90%,65%)",
      rgb: "rgb(246,85,93)"
    }
  }
};

test("create color from string [format: default]", () => {
  const { value, colors } = generalСonfigurations.str;
  const defaultColor = createColor(value);
  expect(defaultColor).toBe(colors.hex);
});

Object.entries(generalСonfigurations.str.colors).forEach(([key, color]) => {
  test(`create color from string [format: ${key}]`, () => {
    const hsl = createColor(generalСonfigurations.str.value, { format: key });
    expect(hsl).toBe(color);
  });
});

Object.entries(generalСonfigurations.arr.colors).forEach(([key, color]) => {
  test(`create color from array [format: ${key}]`, () => {
    const hsl = createColor(generalСonfigurations.arr.value, { format: key });
    expect(hsl).toBe(color);
  });
});

Object.entries(generalСonfigurations.obj.colors).forEach(([key, color]) => {
  test(`create color from object [format: ${key}]`, () => {
    const hsl = createColor(generalСonfigurations.obj.value, { format: key });
    expect(hsl).toBe(color);
  });
});

Object.entries(generalСonfigurations).forEach(([key, parameter]) => {
  describe(`check that all formats are equal when converting. type: ${key}, value: ${JSON.stringify(
    parameter.value
  )}`, () => {
    const hex = createColor(parameter.value);
    const rgb = createColor(parameter.value, { format: "rgb" });
    const hsl = createColor(parameter.value, { format: "hsl" });

    const hslFromHex = colorTocolor(hex, "hsl"); // [hex -> hsl]
    const hslFromRgb = colorTocolor(rgb, "hsl"); // [rgb -> hsl]
    const hexFromRgb = colorTocolor(rgb, "hex"); // [rgb -> hex]
    const rgbFromHex = colorTocolor(hex, "rgb"); // [hex -> rgb]

    it("convert rgb to hsl and check for equality", () => {
      expect(hslFromRgb).toBe(hsl);
    });

    it("convert hex to hsl and check for equality", () => {
      expect(hslFromHex).toBe(hsl);
    });

    it("convert rgb to hex and check for equality", () => {
      expect(hexFromRgb).toBe(hex);
    });

    it("convert hex to rgb and check for equality", () => {
      expect(rgbFromHex).toBe(rgb);
    });
  });
});

/*
 *  These are error checking tests
 */

const errorFormat = "errorformat";
test(`there should be an error with the message: ${errorsMsg.errorFormat(errorFormat)}`, () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const testError = createColor(generalСonfigurations.obj, {
      format: errorFormat
    });
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe(errorsMsg.errorFormat(errorFormat));
  }
});

test(`there should be an error with the message: ${errorsMsg.inputNotFound}`, () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const testError = createColor();
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe(errorsMsg.inputNotFound);
  }
});

[null, '', 0, Symbol, [], {}, true].forEach((item) => {
  let format = item && item.format;
  test(`[format: ${item} | typeof : ${typeof item}]. Error with the message: ${errorsMsg.errorFormat(format)}`, () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const testError = createColor(generalСonfigurations.str, item);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(errorsMsg.errorFormat(format));
    }
  });
});
