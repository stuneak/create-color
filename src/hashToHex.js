export const hashToHex = hash => {
  const c = (hash & 0x00ffffff).toString(16);
  return `#${"00000".substring(0, 6 - c.length) + c}`;
}
