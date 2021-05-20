module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx,md,mdx,html}',
      './public/**/*.html',
    ],
    options: {
      safelist: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5']
    }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
