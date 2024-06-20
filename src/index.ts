import { HelloWorld } from "./components/hello-world";
import { HorizontalNavigation } from "./components/navigations/horizontal-navigation";
import { ScrollViewer } from "./components/scroll-viewer";
import { MyElement } from "./my-element";

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
    "hello-world": HelloWorld;
    "scroll-viewer": ScrollViewer;
    "horizontal-navigation": HorizontalNavigation;
  }
}
