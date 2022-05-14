import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
    children: React.ReactNode;
}

interface IPortalState {}

class Portal extends Component<IPortalProps, IPortalState> {

    private el: HTMLDivElement = document.createElement('div');

    public componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    public render(): React.ReactElement<IPortalProps> {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Portal;
