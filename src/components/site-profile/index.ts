import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('scroll-viewer')
export class ScrollViewer extends LitElement {
  protected render() {
    return html`
<article>
  <div class="title">
  <slot name="title"></slot>

  </div>
  <div class="name">
  <slot name="name"></slot>

  </div>
  <div class="description">
  <slot name="description"></slot>
  </div>
</article>
    `
  }
  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
    }
    article {
      display: grid;
      grid-template-areas: 
        "hoge hoge hoge"
        "hoge hoge hoge"
        "hoge hoge hoge"
        "hoge hoge hoge"
      ;
      grid-template-rows: 4em 5em 1fr 3em;
      grid-template-columns: 5em 1fr 5em;
    }
`
}