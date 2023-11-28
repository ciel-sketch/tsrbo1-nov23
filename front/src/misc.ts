export const querySelector = <T extends Element>(
  cssSelector: string,
  type?: new () => T // pour indiquer qu'on veut le nom de la classe
): T => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Can not find element with selector ${cssSelector}`);
  }
  if (type && !(container instanceof type)) {
    throw new Error(
      `Element found with selector ${cssSelector} is not of type ${type.name}`
    );
  }
  return container as T;
};

export const setNbrAttribute = (
  elt: SVGElement,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value.toString());
};

export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};
