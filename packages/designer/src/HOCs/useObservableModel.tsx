import * as React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import * as Models from '@art-forms/models';


export function useObservableModel<T>(WrappedComponent: any) {
    class Enhance extends React.Component<T> {
        subscriptions: Models.IDisposable[] = [];

        constructor(props: T) {
            super(props);
            this.state = {};
            this.subscribeOnObservable();
        }

        componentWillUnmount() {
            super.componentWillUnmount && super.componentWillUnmount();
            this.subscriptions.forEach(x => setTimeout(() => x.dispose()));
        }

        subscribeOnObservable() {
            Object.keys(this.props).forEach((propertyName: string) => {
                if (Models.isObservable((this.props as any)[propertyName])) {
                    const observable = Models.getObservable((this.props as any)[propertyName]);
                    observable && this.subscriptions.push(observable.subscribe((obj: any) => {
                        this.setState({ [propertyName]: obj });
                    }))
                }
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