export const querySelector = (cssSelector: string): Element => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Can not find element with selector ${cssSelector}`);
  }
  return container;
};
