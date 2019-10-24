export const hashToRgb = hash => `rgb(${(hash & 0xff0000) >> 16},${(hash & 0x00ff00) >> 8},${hash & 0x0000ff})`;
