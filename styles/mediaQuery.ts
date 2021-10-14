const breakpoints = {
  xl: 1600,
  l: 1200,
  m: 992, // device
  sm: 768, // mobile
  s: 640,
  x: 480,
  xs: 375,
};

export const media = {
  // max-width
  maxXl: `(max-width: ${breakpoints.xl - 1}px)`,
  maxL: `(max-width: ${breakpoints.l - 1}px)`,
  maxM: `(max-width: ${breakpoints.m - 1}px)`,
  maxSm: `(max-width: ${breakpoints.sm - 1}px)`,
  maxS: `(max-width: ${breakpoints.s - 1}px)`,
  maxX: `(max-width: ${breakpoints.x - 1}px)`,
  maxXs: `(max-width: ${breakpoints.xs - 1}px)`,

  // min-width
  minXl: `(min-width: ${breakpoints.xl}px)`,
  minL: `(min-width: ${breakpoints.l}px)`,
  minM: `(min-width: ${breakpoints.m}px)`,
  minSm: `(min-width: ${breakpoints.sm}px)`,
  minS: `(min-width: ${breakpoints.s}px)`,
  minX: `(min-width: ${breakpoints.x}px)`,
  minXs: `(min-width: ${breakpoints.xs}px)`,
};
