import { ReactElement, createElement } from "react";
import { DemoPreviewProps } from "../typings/DemoProps";

export function preview(_props: DemoPreviewProps): ReactElement {
    return <div>Demo</div>;
}

export function getPreviewCss(): string {
    return require("./ui/Demo.css");
}
