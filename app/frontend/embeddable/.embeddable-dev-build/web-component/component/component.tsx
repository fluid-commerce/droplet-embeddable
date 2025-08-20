import { Component, Watch, Host, Prop, Event, EventEmitter, h, Listen } from '@stencil/core';
import render from '../../embeddable-prepared-build/embeddable-prepared';

@Component({
  tag: 'embeddable-component', 
  styleUrl: './style.css',
  shadow: true,
})
export class EmbeddableComponent {

  private rootElement?: HTMLDivElement;
  private updateEventDispatched?: boolean;

  @Prop() componentName: string;
  @Prop() props: string = '{}';
  @Prop() clientContext: string = '{}';
  @Prop() theme: any = {};

  @Event({
    eventName: 'componentLoaded',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) componentDidLoadEvent: EventEmitter<any>;

  @Watch('componentName')
  watchComponentName() {
    this.handlePops();
  }

  @Watch('theme')
  watchTheme() {
    const eventClientContext = new CustomEvent('embeddable-event:update-theme', {
      bubbles: false,
      detail: this.theme,
    });
    this.rootElement.dispatchEvent(eventClientContext);
  }

  componentDidLoad() {
    this.handlePops();
    const props = JSON.parse(this.props);
    this.componentDidLoadEvent.emit({
        componentId: props.componentId,
        componentName: this.componentName
    })
  }

  disconnectedCallback() {
    // Component is no longer connected to the document > Must be unmounted
    if(!this.rootElement.isConnected) {
      this.rootElement.dispatchEvent(new CustomEvent('EMBEDDABLE_COMPONENT:UNMOUNT'));
    }
  }

  componentWillUpdate() {
    const eventProps = new CustomEvent('embeddable-event:update-props', {
      bubbles: false,
      detail: JSON.parse(this.props),
    });

    const eventClientContext = new CustomEvent('embeddable-event:update-client-context', {
      bubbles: false,
      detail: JSON.parse(this.clientContext),
    });

    this.rootElement.dispatchEvent(eventProps);
    this.rootElement.dispatchEvent(eventClientContext);
    this.updateEventDispatched = true;
  }

  @Listen('embeddable-event:update-props-listen', {target: 'window'})
  handleUpdatePropsListen(e) {
    const componentId = e.detail.componentId;
    const props = JSON.parse(this.props);

    if(this.updateEventDispatched && componentId === props.componentId) {
      const event = new CustomEvent('embeddable-event:update-props', {
        bubbles: false,
        detail: props,
      });
      this.rootElement.dispatchEvent(event);
   } 
  }

  @Listen('embeddable-event:update-client-context-listen', {target: 'window'})
  handleUpdateClientContextListen(e) {
    const componentId = e.detail.componentId;
    const props = JSON.parse(this.props);
    if(this.updateEventDispatched && componentId === props.componentId) {
      const clientContext = JSON.parse(this.clientContext);
      const event = new CustomEvent('embeddable-event:update-client-context', {
        bubbles: false,
        detail: clientContext,
      });
      this.rootElement.dispatchEvent(event);
   } 
  }

  render() {
    return (
      <Host>
        <div class="container" ref={el => this.rootElement = el}/>
      </Host> 
    )
  }

  private handlePops() {
    render(
      this.rootElement,
      this.componentName,
      JSON.parse(this.props),
      JSON.parse(this.clientContext),
      this.theme
    );
  }
}
