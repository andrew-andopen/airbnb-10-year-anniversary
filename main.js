const AnimatedTags = document.querySelectorAll(
  "h1, h2, h3, p, .form-field, button, .ao-logo"
);

AnimatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = () => {
  let delay = 0.15;

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
});

window.addEventListener("resize", () => {
  fadeIn();
});

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

document.addEventListener("scroll", () => {
  headerShow();
});
