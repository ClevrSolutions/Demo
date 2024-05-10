import { ReactElement, Component, createElement } from "react";
import { TextInput } from "./components/TextInput";
import { DemoContainerProps } from "../typings/DemoProps";

import "./ui/Demo.css";

export class Demo extends Component<DemoContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    render(): ReactElement {
        const value = this.props.textAttribute.value || "";
        return (
            <TextInput
                value={value}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
                onUpdate={this.onUpdateHandle}
            />
        );
    }
    private onUpdate(value: string): void {
        this.props.textAttribute.setValue(value);
    }
}
