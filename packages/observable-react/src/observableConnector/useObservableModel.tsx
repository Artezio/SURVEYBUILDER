import * as React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { isObservable, getObservable } from '@artezio/observable';


interface IDisposable {
    dispose(): void;
}

export function useObservableModel<T>(WrappedComponent: any): React.ComponentType<T> {
    class Enhance extends React.Component<T> {
        subscriptions: IDisposable[] = [];
        wasNotUnmounted: boolean = true;

        constructor(props: T) {
            super(props);
            this.state = {};
            this.subscribeOnObservable();
        }

        componentWillUnmount() {
            this.wasNotUnmounted = false;
            super.componentWillUnmount && super.componentWillUnmount.call(this);
            this.subscriptions.forEach(x => setTimeout(() => x.dispose()));
        }

        subscribeOnObservable() {
            Reflect.ownKeys(this.props).forEach(propertyName => {
                if (propertyName === 'key') return;
                if (isObservable((this.props as any)[propertyName])) {
                    const observable = getObservable((this.props as any)[propertyName]);
                    observable && this.subscriptions.push(observable.subscribe((obj: any) => {
                        this.wasNotUnmounted && this.setState({ [propertyName]: obj });
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