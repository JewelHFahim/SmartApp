import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const colors = ['#FB8A3E', '#D65EC2', '#48A3F8', '#46FFE9', '#C4FF95'];

    const [series] = useState([
        {
            data: [1200, 1000, 1300, 1500, 1100]
        }
    ]);

    const [options] = useState({
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    console.log(chart, w, e)
                }
            },
            toolbar: {
                show: false
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
                borderRadius: 10
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                [19],
                [20],
                [21],
                [22],
                [22],

            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '12px',
                    background: '#f2f2f2' // Set the background color for the labels
                }
            },
            axisBorder: {
                color: '#f2f2f2', // Set the color for the x-axis border
                // Set the width for the x-axis border
            }
        },

        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: '#fff',
                    fontSize: '12px',
                }
            },
            axisBorder: {
                show: false
            }
        },

    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default ApexChart;
