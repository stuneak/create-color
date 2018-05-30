var createColor = require("../lib");

const allFormats = {
  hex: "test",
  rgb: "test",
  hsl: "test"
};

test("create color from string [format: default]", () => {
  var defaultColor = createColor("canThereBeAnyText");
  expect(defaultColor).toBe("#67CB22");
});

test("create color from string [format: hsl]", () => {
  var hsl = createColor("canThereBeAnyText", "hsl");
  expect(hsl).toBe("hsl(96,71%,46%)");
});

test("create color from string [format: hex]", () => {
  var hex = createColor("canThereBeAnyText", "hex");
  expect(hex).toBe("#67CB22");
});

test("create color from string [format: rgb]", () => {
  var rgbFromString = createColor("canThereBeAnyText", "rgb");
  expect(rgbFromString).toBe("rgb(103,203,34)");
});

test("create color from array [format: hex]", () => {
  var hexFromArray = createColor(["random", "color", "generation"], "hex");
  expect(hexFromArray).toBe("#DAB388");
});

test("create color from object [format: hex]", () => {
  var hexFromObject = createColor(
    { hash: "g443r3+_evr3g", user: "admin" },
    "hex"
  );
  expect(hexFromObject).toBe("#55182C");
});

test('should throw Error with message "[X] Unknown format: errorformat. The following formats are available: hex,rgb,hsl"', () => {
  const format = "errorformat";
  try {
    var testError = createColor(
      { hash: "g443r3+_evr3g", user: "admin" },
      format
    );
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe(
      `[X] Unknown format: ${format}. The following formats are available: hex,rgb,hsl`
    );
  }
});

test('should throw Error with message "[X] You did not specify input parameters"', () => {
  try {
    var testError = createColor();
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe(`[X] You did not specify input parameters`);
  }
});
