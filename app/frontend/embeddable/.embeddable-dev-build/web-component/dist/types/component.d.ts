import { EventEmitter } from './stencil-public-runtime';
export declare class EmbeddableComponent {
    private rootElement?;
    private updateEventDispatched?;
    componentName: string;
    props: string;
    clientContext: string;
    theme: any;
    componentDidLoadEvent: EventEmitter<any>;
    watchComponentName(): void;
    watchTheme(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    componentWillUpdate(): void;
    handleUpdatePropsListen(e: any): void;
    handleUpdateClientContextListen(e: any): void;
    render(): any;
    private handlePops;
}
