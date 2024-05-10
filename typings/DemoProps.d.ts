/**
 * This file was generated from Demo.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";

export interface DemoContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
}

export interface DemoPreviewProps {
    readOnly: boolean;
    textAttribute: string;
}
