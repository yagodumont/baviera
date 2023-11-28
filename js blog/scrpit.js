
function scrollToHome() {
  const banner = document.querySelector("#banner");
  const bannerTop = banner.getBoundingClientRect().top;

  window.scrollTo({
      top: bannerTop,
      behavior: "smooth",
  });
}

document.querySelector("a[href='#header']").addEventListener("click", scrollToHome);
