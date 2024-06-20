import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";

@customElement("horizontal-navigation")
export class HorizontalNavigation extends LitElement {
  protected render() {
    return html`
      <div class="wrap">
        <nav class="header">
          <slot name="navigation"></slot>
        </nav>
        <div class="body">
          <slot name="body"></slot>
        </div>
      </div>
    `;
  }
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
    }
    .wrap {
      display: flex;
      flex-direction: column;
    }
    .header {
      display: flex;
      gap: 20px;
    }
  `;
}
