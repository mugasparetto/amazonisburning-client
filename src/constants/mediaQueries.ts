const sizes = {
  mobileS: '20rem',
  mobileM: '23.25rem',
  mobileL: '26.25rem',
  mobileLandscape: '34rem',
  tablet: '48rem',
  smallScreens: '64rem',
  mediumScreens: '80rem',
  largeScreensAndAbove: '112rem',
};

export const mediaQueries = {
  mobileS: `only screen and (min-width: ${sizes.mobileS})`,
  mobileM: `only screen and (min-width: ${sizes.mobileM})`,
  mobileL: `only screen and (min-width: ${sizes.mobileL})`,
  mobileLandscape: `only screen and (min-width: ${sizes.mobileLandscape})`,
  tablet: `only screen and (min-width: ${sizes.tablet})`,
  smallScreens: `only screen and (min-width: ${sizes.smallScreens})`,
  mediumScreens: `only screen and (min-width: ${sizes.mediumScreens})`,
  largeScreensAndAbove: `only screen and (min-width: ${sizes.largeScreensAndAbove})`,
};
