const AnimatedTags = document.querySelectorAll(".animate, .ao-logo");

const Header = document.querySelector("header.fixed");

const Hero = document.querySelector(".hero");

const headerShow = () => {
  const HeroBottom = Hero.getBoundingClientRect().bottom;
  if (HeroBottom < 0) {
    Header.classList.add("show");
  } else {
    Header.classList.remove("show");
  }
};

AnimatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = () => {
  let delay = 0.3;

  AnimatedTags.forEach((tag, index) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      delay = delay + 0.02;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

fadeIn();

document.addEventListener("scroll", () => {
  fadeIn();
  headerShow();
});

window.addEventListener("resize", () => {
  fadeIn();
});

const Titles = document.querySelectorAll(".intro-animation");

Titles.forEach((title, index) => {
  title.style.animation = `fadeIn 1s ${index / 2}s both`;
});
