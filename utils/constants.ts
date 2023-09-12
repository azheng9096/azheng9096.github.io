const breakpointsPx = {
  sm: 480,
  md: 960,
};

export const deviceSizes = {
  sm: `(max-width: ${breakpointsPx.sm}px)`,
  md: `(min-width: ${breakpointsPx.sm + 1}px) and (max-width: ${
    breakpointsPx.md
  }px)`,
  lg: `(min-width: ${breakpointsPx.md + 1}px)`,
};

export const enum AspectRatio {
  OneToOne = "one-to-one",
  FourToThree = "four-to-three",
  SixteenToNine = "sixteen-to-nine",
}
