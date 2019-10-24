const createColor = require("../lib");
const getColor = require("color");

const str = [
  '32ed',
  '30z9-0-f9f0s',
  '3999',
  '490f990-fdz',
  '9eff5f79-13ce-4555-bd86-1737a24ebe33',
  '9fc91124-0c99-48f8-863e-49f173ead3f7'
];

str.forEach((item) => {
  test("Some strings return invalid hex values [https://github.com/stuneak/create-color/issues/2]", () => {
    try {
      const color = createColor(item);
      getColor(color);
      expect(true).toBe(true);
    } catch (e) {
      expect(false).toBe(true);
    }
  });
});
