export const classes = (dynamic: any, classes = "") => {
  return Object.entries(dynamic)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ")
    .concat(" ")
    .concat(classes);
};

export const handleHtmlScroll = (value: boolean) => {
  let root = document.documentElement;
  if (value) {
    root.classList.add("disable-scroll");
  } else {
    root.classList.remove("disable-scroll");
  }
};

export const handleBodyScroll = (value: boolean) => {
  let body = document.body;
  if (value) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
};

export const isInViewport = (elements: HTMLElement) => {
  var scroll = window.scrollY || window.pageYOffset;
  var boundsTop = elements.getBoundingClientRect().top + scroll;

  var viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };

  var bounds = {
    top: boundsTop,
    bottom: boundsTop + elements.clientHeight,
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
};
