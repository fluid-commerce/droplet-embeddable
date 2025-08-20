import 'vite/modulepreload-polyfill';



import React from 'react';
import ReactDOM from 'react-dom/client';

const COMPONENT_MAP = {
	Text: React.lazy(() => import('@embeddable.com/vanilla-components/dist/Text')),
	TimeSeriesBarChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/TimeSeriesBarChart')),
	BubbleChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/BubbleChart')),
	BarChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/BarChart')),
	BubbleMapChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/BubbleMapChart')),
	CompareLineChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/CompareLineChart')),
	MultiSelectDropdown: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MultiSelectDropdown')),
	GranularityPicker: React.lazy(() => import('@embeddable.com/vanilla-components/dist/GranularityPicker')),
	Dropdown: React.lazy(() => import('@embeddable.com/vanilla-components/dist/Dropdown')),
	SelectorDimensionOrMeasure: React.lazy(() => import('@embeddable.com/vanilla-components/dist/SelectorDimensionOrMeasure')),
	MultiSelectorMeasure: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MultiSelectorMeasure')),
	DownloadButton: React.lazy(() => import('@embeddable.com/vanilla-components/dist/DownloadButton')),
	DynamicAxisBar: React.lazy(() => import('@embeddable.com/vanilla-components/dist/DynamicAxisBar')),
	MultiSelectorDimensionOrMeasure: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MultiSelectorDimensionOrMeasure')),
	KPIChartText: React.lazy(() => import('@embeddable.com/vanilla-components/dist/KPIChartText')),
	SimpleKPIChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/SimpleKPIChart')),
	MultiSelectorDimension: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MultiSelectorDimension')),
	KPIChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/KPIChart')),
	MapChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MapChart')),
	TimeSeriesStackedBarChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/TimeSeriesStackedBarChart')),
	StackedAreaChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/StackedAreaChart')),
	PieChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/PieChart')),
	ScatterChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/ScatterChart')),
	TableChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/TableChart')),
	MultiDimensionLineChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MultiDimensionLineChart')),
	NumberInput: React.lazy(() => import('@embeddable.com/vanilla-components/dist/NumberInput')),
	StackedBarChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/StackedBarChart')),
	SelectorMeasure: React.lazy(() => import('@embeddable.com/vanilla-components/dist/SelectorMeasure')),
	SelectorDimension: React.lazy(() => import('@embeddable.com/vanilla-components/dist/SelectorDimension')),
	DateRangePicker: React.lazy(() => import('@embeddable.com/vanilla-components/dist/DateRangePicker')),
	MultiSelectButtons: React.lazy(() => import('@embeddable.com/vanilla-components/dist/MultiSelectButtons')),
	TextInput: React.lazy(() => import('@embeddable.com/vanilla-components/dist/TextInput')),
	ComparisonFilter: React.lazy(() => import('@embeddable.com/vanilla-components/dist/ComparisonFilter')),
	LineChart: React.lazy(() => import('@embeddable.com/vanilla-components/dist/LineChart')),
	PivotTable: React.lazy(() => import('@embeddable.com/vanilla-components/dist/PivotTable')),
	ExamplePieChart: React.lazy(() => import('../src/embeddable.com/components/examples/ExamplePieChart/ExamplePieChart.emb.ts')),
	ExampleTextInput: React.lazy(() => import('../src/embeddable.com/components/examples/ExampleTextInput/ExampleTextInput.emb.ts')),
	HelloWorld: React.lazy(() => import('../src/embeddable.com/components/examples/HelloWorld/HelloWorld.emb.ts'))
};

function DefaultErrorFallbackComponent({ error }) {
    return <div>Error: {error?.message}</div>;
}

export default (rootEl, componentName, props, clientContext, theme) => {
    const Component = COMPONENT_MAP[componentName];
    const root = ReactDOM.createRoot(rootEl);
    const unmountHandler = () => {
        root.unmount();
        rootEl.removeEventListener('EMBEDDABLE_COMPONENT:UNMOUNT', unmountHandler);
    };
    root.render(
    <ErrorBoundary fallback={null ?? DefaultErrorFallbackComponent}>
        <React.Suspense fallback={<div/>}>
            
                <Component {...props} propsUpdateListener={rootEl} clientContext={clientContext} embeddableTheme={theme} />
            
        </React.Suspense>
    </ErrorBoundary>
    );
    rootEl.addEventListener('EMBEDDABLE_COMPONENT:UNMOUNT', unmountHandler);
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError && this.props.fallback) {
      const FallbackComponent = this.props.fallback;
      return <FallbackComponent error={this.state.error} />
    }

    return this.props.children;
  }
}