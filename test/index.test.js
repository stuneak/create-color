var createColor = require("../lib");

test("create color from string [format: default]", function () {
  var defaultColor = createColor("canThereBeAnyText");
  expect(defaultColor).toBe("#8906A2");
});

test("create color from string [format: hsl]", function () {
  var hsl = createColor("canThereBeAnyText", "hsl");
  expect(hsl).toBe("hsl(290,93%,33%)");
});

test("create color from string [format: hex]", function () {
  var hex = createColor("canThereBeAnyText", "hex");
  expect(hex).toBe("#8906A2");
});

test("create color from string [format: rgb]", function () {
  var rgb = createColor("canThereBeAnyText", "rgb");
  expect(rgb).toBe("rgb(137,6,162)");
});

test("create color from array [format: hex]", function () {
  var hex = createColor(["random", "color", "generation"], "hex");
  expect(hex).toBe("#A79A16");
});

test("create color from object [format: hex]", function () {
  var hex = createColor({ hash: "g443r3+_evr3g", user: "admin" }, "hex");
  expect(hex).toBe("#DA2D84");
});
