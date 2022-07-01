module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "aqua": "#61f4de",
        "purple": "#6e78ff",
        "noir": "#070828",
        "blanc-b": "#f3feff"
       },
       "screens": {
        "ipad_mini": '744px',
        "ipad_pro": '1024px',
        "desktop": '1440px',
      },
       "borderRadius": {
        "none": "0",
        "xs": "0.625rem",
        "sm": "1.1184009313583374rem",
        "default": "1.1445741653442383rem",
        "lg": "1.3125rem",
        "xl": "2.0625rem",
        "2xl": "2.1875rem"
       },
       "fontFamily": {
        "kyivtype-sans": "KyivType Sans",
        "montserrat": "Montserrat"
       },
     }
     
  },
  plugins: [],
}
