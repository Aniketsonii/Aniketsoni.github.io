
// //loader function
// const myElement = document.querySelector("#os-phrases > h2");
// myElement.lettering("words");
// myElement.style.opacity = 1;
// Object.values(myElement.children)
//   .map((i) => {
//     i.lettering();
//     return i;
//   })
//   .map((i) => {
//     i.lettering();
//     return i;
//   });


(function () {
  var i,
    e,
    d = document,
    s = "script";
  i = d.createElement("script");
  i.async = 1;
  i.charset = "UTF-8";
  i.src =
    "https://cdn.curator.io/published/83f6934d-7471-47e2-a31c-1d67ff64f2fe.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
})();

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("header").style.visibility = "visible";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.transition = "opacity 0.5s ease-in";
  } else {
    document.getElementById("header").style.visibility = "hidden";
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.transition = "opacity 0.5s ease-out";
  }
}

window.addEventListener("load", function () {
  const mainScreen = document.querySelector(".main");
  const cinematic = document.getElementById("cinematic");
  // mainScreen.style.display = "block";
  // Hide the loading screen when the page is fully loaded
  setTimeout(() => {
    const loadingScreen = document.querySelector(".loader-container");
    // const cinematic_border = document.querySelector(".cinematic-border");
    document.querySelector(".os-phrases > h2").style.zIndex = 1
    loadingScreen.style.opacity = 0;
    mainScreen.style.opacity = 1;
    cinematic.classList.remove("cinematic-border");
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainScreen.style.display = "block";
    }, 1200); // 1.5 secs
  }, 1200); // 3000 milliseconds (3 seconds)
});
