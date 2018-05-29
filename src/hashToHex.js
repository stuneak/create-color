const hashToHex = hash => `#${(hash & 0x00ffffff).toString(16).toUpperCase()}`;

export default hashToHex;
