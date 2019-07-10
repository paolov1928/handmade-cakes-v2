const allText = {
  navBar: {
    title: "EFFIE MAE",
    underText: "Personalised Cake Designer",
    menuItems: [
      { text: "Gallery", scrollTo: ".scroll-gallery" },
      { text: "About", scrollTo: ".scroll-about" },
      { text: "Social Media", scrollTo: ".scroll-insta" },
      { text: "Contact", scrollTo: ".scroll-form" }
    ]
  },
  about: { title: "I am Effie the best baker in the whole of the 7 kingdoms" },
  form: {
    title:
      "To order a personalised cake or make an enquiry please send us an email using the form below:",
    firstInput: "Name(*)",
    secondInput: "Email(*)",
    thirdInput: "Message (*)",
    fourthInput: "Drip",
    fifthInput: "Topping",
    sixthInput: "Base"
  },
  dropdownArrays: {
    drip: ["Please select", "yellow", "green", "red", "white"],
    topping: [
      "Please select",
      "sprinkles",
      "chocolate balls",
      "mars bars",
      "nuts",
      "plain"
    ],
    base: [
      "Please select",
      "chocolate",
      "vanilla",
      "carrot",
      "toffee",
      "marble",
      "sponge"
    ]
  },
  home: {
    fillerInsta:
      "Check out the instagram feed for a showcase of the latest baking projects",
    fillerPrices: "Please find below the base prices",
    fillerForm:
      "If interested please do not hesitate to get in contact with us!",
    textOnFirstImage: [
      {
        main: "Delicious Handmade Cakes",
        under: "Made with love"
      },
      {
        main: "Personalise your very own cake",
        under: "Made to order"
      },
      {
        main: "The Most Beautiful Wedding Cakes",
        under: ""
      }
    ],
    firstTypography: [
      "Personalised Cake Design for any special occasion",
      "Gluten & Dairy Free options available",
      "Customise your perfect frosted cake",
      "London based"
    ],
    secondTypography: [
      "Occasion Cakes",
      "Tiered Wedding Cakes",
      "Macaroons",
      "Wedding Favours"
    ]
  },
  pricesTable: [
    { type: "1 layer", price: "55" },
    { type: "Wedding 3 layer", price: "350" },
    { type: "Wedding 4 layer", price: "400" }
  ]
}

module.exports = allText
