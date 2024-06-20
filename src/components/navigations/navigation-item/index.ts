import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("navigation-item")
export class NavigationItem extends LitElement {
  @property({ type: String })
  name: string = "";

  @property({ type: String })
  href: string = "";

  @property({ type: String })
  target: string = "";

  protected render() {
    return html` <a href=${this.href} target=${this.target}> ${this.name} </a> `;
  }

  static styles = css`
    :host {
      margin: 0;
      padding: 0;
      font-size: 1.2rem;
    }

    a {
      display: inline-block;
      text-decoration: none;
    }
  `;
}
