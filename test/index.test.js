var createColor = require("../lib");

test("create color from string [format: default]", function () {
  var defaultColor = createColor("canThereBeAnyText");
  expect(defaultColor).toBe("#67CB22");
});

test("create color from string [format: hsl]", function () {
  var hsl = createColor("canThereBeAnyText", "hsl");
  expect(hsl).toBe("hsl(96,71%,46%)");
});

test("create color from string [format: hex]", function () {
  var hex = createColor("canThereBeAnyText", "hex");
  expect(hex).toBe("#67CB22");
});

test("create color from string [format: rgb]", function () {
  var rgb = createColor("canThereBeAnyText", "rgb");
  expect(rgb).toBe("rgb(103,203,34)");
});

test("create color from array [format: hex]", function () {
  var hex = createColor(["random", "color", "generation"], "hex");
  expect(hex).toBe("#DAB388");
});

test("create color from object [format: hex]", function () {
  var hex = createColor({ hash: "g443r3+_evr3g", user: "admin" }, "hex");
  expect(hex).toBe("#55182C");
});
