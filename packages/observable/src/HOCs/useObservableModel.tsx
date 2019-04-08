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
            super.componentWillUnmount && super.componentWillUnmount.call(this);
            this.subscriptions.forEach(x => setTimeout(() => x.dispose()));
        }

        subscribeOnObservable() {
            // Object.entries(this.props)
            //     .filter(entry => Models.isObservable(entry[1]))
            //     .map(([key, value]) => [key, Models.getObservable(value)])
            //     .forEach(([key, value]) => {
            //         const observable = Models.getObservable(value);
            //         if(observable){
            //             this.subscriptions.push(observable.subscribe((obj: any) => {
            //                 this.setState({ [key]: obj });
            //             }));
            //         }
            //     });
            Object.keys(this.props).forEach((propertyName: string) => {
                if (Models.isObservable((this.props as any)[propertyName])) {
                    const observable = Models.getObservable((this.props as any)[propertyName]);
                    observable && this.subscriptions.push(observable.subscribe((obj: any) => {
                        this.setState(obj);
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