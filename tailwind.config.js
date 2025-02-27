module.exports = {
  content: [
    "./index.html", // If using plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // If using React, Next.js, or Vue
  ],
  theme: {
    extend: {
      colors: {
        myblue: '#197BBD', 
        mygray: '#B1B1B1',
        mysoftblue: '#F0F7FF'
      },
    },
  },
  plugins: [],
};
