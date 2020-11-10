export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  red: '',
  yellow: 'rgb(255, 207, 0)',
  blue: 'rgb(0, 109, 183)',
  legoYellow: '#F6EC35',
  legoRed: '#D11013',
  primaryColor: '#2D55A6',
  subColor: '#476DAC',
  subYellow: '#F2E641',
  subOrange: '#F28F38',
  subRed: '#F24738',
  test: '#002541',
  test2: '',
  test3: '',
  test4: '',
  test5: '',
  mobile: `only screen and (min-width: ${size.small})`,
  tablet: `only screen and (min-width: ${size.large})`,
  laptop: `only screen and (min-width: ${size.largest})`,
};

export default theme;
