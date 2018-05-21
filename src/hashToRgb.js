const hashToRgb = hash => {
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;
  return `rgb(${r},${g},${b})`;
};

export default hashToRgb;
