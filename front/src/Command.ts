import { max, step } from "./constants";
import { Config } from "./interfaces/Config";
import { keys, querySelector, sleep } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };
  isPlaying = false;

  constructor() {
    this.setActions();
  }

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

    const btnElt = querySelector(".command .buttons .play");
    btnElt.innerHTML = this.isPlaying ? "Pause" : "Play";
  }

  setActions(): void {
    for (const key of keys(this.config)) {
      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      // change : waits for mouseout event, input : triggers on mouse move
      sliderElt.addEventListener("input", (): void => {
        const config: Config = { ...this.config, [key]: +sliderElt.value }; // typescript ne peut pas contrôler le type de key ici
        this.setConfig(config);
      });
    }

    this.setBtnActions();
  }

  setBtnActions(): void {
    const btnElt = querySelector(".command .buttons .play");
    btnElt.addEventListener("click", (event: Event) => {
      console.log("event: ", event);
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.startPlaying();
      }
      this.render();
    });
  }

  setConfig(config: Config): void {
    this.config = config;
    this.render();
    this.callback(this.config);
  }

  async startPlaying(): Promise<void> {
    while (this.isPlaying) {
      this.config.multiplicationFactor = parseFloat(
        ((this.config.multiplicationFactor + step) % max).toFixed(2)
      );
      console.log("multiplicationFactor: ", this.config.multiplicationFactor);
      this.render();
      this.callback(this.config);
      await sleep(15); // 1000/60 (60 images/seconde)
    }
  }
}
