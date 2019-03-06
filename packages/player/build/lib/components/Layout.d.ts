import * as React from 'react';
import LayoutProps from '../interfaces/componentProps/Layout';
export declare class Layout extends React.Component<LayoutProps> {
    toggleAppModeToDesign(): void;
    render(): JSX.Element;
}
export declare const ConnectedToReduxLayout: import("react-redux").ConnectedComponentClass<typeof Layout, any>;
export default ConnectedToReduxLayout;
