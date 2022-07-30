import { Component, createSignal } from "solid-js";

import { SolidApexCharts } from 'solid-apexcharts';

const AKBarChart: Component<any> = () => {
    const [options] = createSignal({
        chart: {
            id: 'ak-chart-example',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    });
    const [series] = createSignal({
        list: [
            {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91],
            },
        ],
    });

    return (
        <>
            <div class="pt-5">
                <SolidApexCharts width="100%" type="bar" options={options()} series={series().list} />
            </div>
        </>
    )
}
export default AKBarChart;