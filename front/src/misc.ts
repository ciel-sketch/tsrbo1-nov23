export const querySelector = (cssSelector: string): Element => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Can not find element with selector ${cssSelector}`);
  }
  return container;
};

export const setNbrAttribute = (
  elt: SVGElement,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value.toString());
};

export const keys = <T extends object>(obj: T) => {
  return Object.keys(obj) as (keyof T)[];
};
