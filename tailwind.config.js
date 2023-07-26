/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/index.js",
    "./src/components/Navbar.jsx",
    "./src/components/Home.jsx",
    "./src/components/Skills.jsx",
    "./src/components/About.jsx",
    "./src/components/Works.jsx",
    "./src/components/Workmore.jsx",
    "./src/components/Pokemon.jsx",
    "./src/components/Contact.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Education.jsx",
    "./src/components/Message.jsx",
    "./src/components/MessageFail.jsx",
    "./src/headerAnimation.js",
    "./src/textAnimation.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'deneme-1' : "url('../src/sources/images/PAS2.jpg')",
        'code-gif' : "url('../src/sources/images/giphy.gif')",
        'space' : "url('../src/sources/images/space1.jpg')",
        'spiral' : "url('../src/sources/images/spiral.jpg')"
      },
    }
  },
  plugins: [],
}

