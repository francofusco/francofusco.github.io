// Function to enable switching from the "home" to a "page", and viceversa.
function setupPage(prefix) {
  // Hide the page, by default.
  $("#" + prefix + "_scroll").fadeOut();

  // Setup the button to access the page.
  $("#" + prefix).click(function(){
    $("#index").fadeOut(
      400,
      function() {
        $("#" + prefix + "_scroll").fadeIn(750);
        $("#" + prefix + "_left").addClass("animated slideInLeft");
        $("#" + prefix + "_right").addClass("animated slideInRight");
      }
    );
  });

  // Setup the button to exit the page.
  $("#" + prefix + "_back").click(function() {
    $("#" + prefix + "_left").addClass("animated slideOutLeft");
    $("#" + prefix + "_right").addClass("animated slideOutRight");
    $("#" + prefix + "_scroll").fadeOut(
      400,
      function() {
        $("#index").fadeIn(600);
        $("#" + prefix + "_left").removeClass("animated slideOutLeft");
        $("#" + prefix + "_right").removeClass("animated slideOutRight");
      }
    );
  });
}

// Function to trigger a slideshow.
function setupSlideshow(containerId) {
  let slides = document.querySelectorAll(`#${containerId} .slide`);
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
}


// Setup pages and slideshows.
$( document ).ready(function() {
  setupPage("work");
  setupPage("publications");
  setupPage("hobbies");
  setupSlideshow("publications_slideshow");
  setupSlideshow("hobbies_slideshow");
});
