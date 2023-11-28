import { Config } from "./interfaces/Config";
import { querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };

  onChange(callback: Callback) {
    throw new Error("Method not implemented.");
  }

  render() {
    for(const key in this.config) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key as keyof Config].toString();
    }
    //const elt2 = querySelector(".command .multiplicationFactor .value");
    //elt2.innerHTML = this.config.multiplicationFactor.toString();
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }
}
