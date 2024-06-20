import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";

@customElement("scroll-viewer")
export class ScrollViewer extends LitElement {
  protected render() {
    return html`
      <div>
        scroll-viewer
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
    }
  `;
}
