/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
      bgColor:"#0A192F",
      primaryColor: "#64FFDA",
      textColor: "#8892B6",
      },
      animation: {
        "background-position-spin":
          "background-position-spin 3000ms infinite alternate",
      },
    },
    keyframes: {
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      'ping-large': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },  
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',

      'xxl-mx': {'max': '1535px'},
      'xl-mx': {'max': '1279px'},
      'lg-mx': {'max': '1023px'},
      'bs-mx': {'max': '899px'},
      'md-mx': {'max': '767px'},
      'sm-mx': {'max': '639px'},
      'xs-mx': {'max': '475px'},
      'xsm-mx':{'max': '349px'},
    },
    
  },
  plugins: [],
}