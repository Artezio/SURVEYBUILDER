import * as React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import * as Models from '@art-forms/models';


export function useObservableModel<T>(WrappedComponent: any) {
    class Enhance extends React.Component<T> {
        subscriptions!: Models.IDestroyable[];

        constructor(props: any) {
            super(props);
            this.state = {}
            this.subscriptions = [];
            this.subscribeOnObservable();
        }

        componentWillUnmount() {
            super.componentWillUnmount && super.componentWillUnmount.call(this);
            this.subscriptions.forEach(x => setTimeout(() => x.destroy()));
        }

        subscribeOnObservable() {
            Object.keys(this.props).forEach((propertyName: string) => {
                if (Models.isObservable((this.props as any)[propertyName])) {
                    const observable = Models.getObservable((this.props as any)[propertyName]);
                    this.subscriptions.push((observable as Models.IObservable).subscribe((obj: any) => {
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