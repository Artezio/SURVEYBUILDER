import * as React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { getObservable } from "@art-forms/models";


export function useObservableModel<T>(WrappedComponent: any) {
    class Enhance extends React.Component<T> {
        constructor(props: any) {
            super(props);
            this.state = {}
            this.subscribeOnObservable();
        }

        subscribeOnObservable() {
            Object.keys(this.props).forEach((propertyName: string) => {
                const observable = getObservable((this.props as any)[propertyName]);
                observable && observable.subscribe((obj: any) => {
                    this.setState({ [propertyName]: obj });
                })
            })
        }

        getProps() {
            return { ...this.props, ...this.state };
        }

        render() {
            return <WrappedComponent {...this.getProps()} />
        }
    }
    hoistNonReactStatic(Enhance, WrappedComponent);
    return Enhance;
}

export default useObservableModel;