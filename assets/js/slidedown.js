// find elements
var portfolio = $(".section-padding-portfolios")
var button = $(".show-more-button")

// handle click and add class
button.on("click", function() {
  portfolio.toggleClass("down up")
})
