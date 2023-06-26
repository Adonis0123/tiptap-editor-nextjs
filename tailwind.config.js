const rem = 16; // 16px

/** 设计师定制 */
const customFontSize = {
  xs: [12, 18],
  sm: [14, 22],
  base: [16, 24],
  lg: [18, 28],
  xl: [20, 32],
  '2xl': [24, 36],
  '3xl': [28, 40],
  '4xl': [32, 44],
  '5xl': [36, 48],
  '6xl': [40, 56],
};

function loadFontSize(fontSizeConfig) {
  for (const key in fontSizeConfig) {
    fontSizeConfig[key] = fontSizeConfig[key].map((item) => {
      const num = item / rem;
      return `${num}rem`;
    });
  }
  return fontSizeConfig;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: loadFontSize(customFontSize),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
