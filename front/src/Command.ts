import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };

  callback: Callback = () => {};

  onChange(callback: Callback): void {
    this.callback = callback;
  }

  render(): void {
    for (const key of keys(this.config)) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key].toString();

      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.value = this.config[key].toString();
    }
  }

  setConfig(config: Config): void {
    this.config = config;
    this.render();
  }
}
