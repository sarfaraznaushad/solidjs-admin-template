import { Component, createSignal } from "solid-js";

import { SolidApexCharts } from 'solid-apexcharts';

const AKProgressChart: Component<any> = (height) => {
    const [options] = createSignal({
        chart: {
            id: 'ak-progress-example',         
        }
    });
    const [series] = createSignal({
        list: [70],
    });

    return (
        <>
            <div class="pt-5">
                <SolidApexCharts height="100%" type="radialBar" options={options()} series={series().list} />
            </div>
        </>
    )
}
export default AKProgressChart;