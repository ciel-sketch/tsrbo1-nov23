import { svgns, r } from "./constants";
import { Config } from "./interfaces/Config";
import { getSamplePosition } from "./math";
import { querySelector, setNbrAttribute } from "./misc";

export class Board {
  public config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };

  public draw() {
    const container = querySelector("svg .samples");
    for (let i = 0; i < this.config.samples; i++) {
      const elt = document.createElementNS(svgns, "circle");
      console.log("elt: %O", elt);

      const c = getSamplePosition(i, this.config.samples);

      setNbrAttribute(elt, "cx", c.x);
      setNbrAttribute(elt, "cy", c.y);
      setNbrAttribute(elt, "r", r);
      container.appendChild(elt);
    }

    const lineContainer = querySelector("svg .lines");
    for (let i = 0; i < this.config.samples; i++) {
      const elt = document.createElementNS(svgns, "line");
      console.log("elt: %O", elt);

      const p1 = getSamplePosition(i, this.config.samples);
      const p2 = getSamplePosition(
        i * this.config.multiplicationFactor,
        this.config.samples
      );

      setNbrAttribute(elt, "x1", p1.x);
      setNbrAttribute(elt, "x2", p2.x);
      setNbrAttribute(elt, "y1", p1.y);
      setNbrAttribute(elt, "y2", p2.y);

      lineContainer.appendChild(elt);
    }
  }

  public setConfig(config: Config) {
    this.config = config;
  }
}
