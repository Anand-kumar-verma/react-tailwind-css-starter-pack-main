import React, { Component, useState } from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Chart from 'react-apexcharts';
import img1 from '../Images/graphimage.png';
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
const NDR = () => {
    const [options, setOptions] = useState({

        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: ['30 jun-6 jul', '06 jul-10 jul', '10 jul-15 jul', '15 jul-20 jul', '20 jul-25 jul', '25 jul-31 jul', '01 Aug-05 Aug', '05 Aug-10 Aug']
        }
    })

    const [series, setSeries] = useState([{
        name: 'series-1',
        data: [30, 40, 50, 56, 45, 45, 45, 90]
    }])

    const [radielbar, setradielbar] = useState({
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        show: true,
                        fontSize: '14px',
                        formatter: function (val) {
                            return val + '%'
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total'
                    }
                }
            }
        }
    })

    const [piechart, setPaichart] = useState({
        series: [44, 55, 90, 17, 55],
        chartOptions: {
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        }
    })

    const state = {
        options: {
            chart: {
                type: 'radialBar',

            },
            dataLabels: {
                enabled: true
            }
        },
        series: [44, 55, 41, 17, 15, 56],
        labels: ['Seller Response', 'Buyer Response', 'Seller Positive Response', 'Buyer Positive Response', 'Seller Positive Response Delivered', 'Buyer Positive Response Delivered']
    }
    const [charts, setCharts] = useState(state);

    const [blankDonut, setBlankDonut] = useState({

        state: {

            series: [44, 55, 13, 33],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    position: 'right',
                    offsetY: 0,
                    height: 230,
                }
            },


        }
    })


    const [semicircle, setSemiCircle] = useState({
        options: {
            series: [50, 30, 90],
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: '15px'
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91]
                },
            },
            labels: ['Total Shipments', 'Pending Shipments', 'Delivered Shipments'],
        }
    })






    return (
        <>

            <div className="w-fullz-20 relative">
                    <div className="grid lg:grid-cols-5 gap-2 fixed bg-[#F5F5F5] z-20">

                        <div className="bg-white rounded-full flex shadow-xl ">
                            <p className="text-blue-500 w-full px-6 py-2 flex justify-between items-center"><span>Jun 3, 2023 - jun 2, 2023</span>
                                <CalendarTodayIcon />
                            </p>
                        </div>
                        <div className="bg-white rounded-full shadow-xl flex">
                            <p className="text-blue-500 w-full px-6 py-2 flex justify-between items-center"><span>Zone</span>
                                <CalendarTodayIcon />
                            </p>
                        </div>
                        <div className="bg-white rounded-full shadow-xl flex">
                            <p className="text-blue-500 w-full px-6 py-2 flex justify-between items-center"><span>Courier</span>
                                <CalendarTodayIcon />
                            </p>
                        </div>
                        <div className="bg-white rounded-full shadow-xl flex ">
                            <p className="text-blue-500 px-6 py-2 w-full flex justify-between  items-center"><span>Payment Mode</span>
                                <CalendarTodayIcon />
                            </p>
                        </div>
                        <div className="bg-white rounded-full shadow-xl flex ">
                            <p className="text-blue-500 w-full px-6 py-2 flex justify-between items-center"><span>Shipment Mode</span>
                                <CalendarTodayIcon />
                            </p>
                        </div>

                    </div>
            </div>
            <div className=" ">
                <div>
                    <div className="bg-[#F3E8FF] mt-20 py-12">
                        <div className="grid lg:grid-cols-5 px-10 gap-5 font-semibold">
                            <div className="bg-[#F8F2FF] shadow-xl rounded-xl pt-3 pb-16 pl-5">
                                <p>NDR Raised</p>
                                <p>0</p>
                            </div>
                            <div className="bg-[#F8F2FF] shadow-xl rounded-xl pt-3 pb-8 pl-5">
                                <p>NDR Raised Percentage</p>
                                <p>0 %</p>
                            </div>
                            <div className="bg-[#F8F2FF] shadow-xl rounded-xl pt-3 pb-8 pl-5">
                                <p>Action Required</p>
                                <p>0</p>
                            </div>
                            <div className="bg-[#F8F2FF] shadow-xl rounded-xl pt-3 pb-8 pl-5">
                                <p>Delivered</p>
                                <p>0</p>
                            </div>
                            <div className="bg-[#F8F2FF] shadow-xl rounded-xl pt-3 pb-8 pl-5">
                                <p>Post NDR</p>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="grid lg:grid-cols-2 pt-10 gap-10 l">
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">NDR Response</p>
                            <hr />
                            <div className="grid lg:grid-cols-2 pt-12 text-gray-600  ">
                                <div>
                                    <ReactApexChart options={charts} series={charts.series} type='radialBar' width="100%" height="auto" />
                                </div>
                                <div className="">
                                    <ul className="list-disc">
                                        {charts.labels.map((i) => {
                                            return (
                                                <li className="pt-2">{i}</li>
                                            )
                                        })}
                                        {/* <li> {charts.labels[0]}</li>
                                        <li> {charts.labels[1]}</li>
                                        <li> {charts.labels[2]}</li>
                                        <li> {charts.labels[3]}</li>
                                        <li> {charts.labels[4]}</li> */}
                                    </ul>

                                </div>
                            </div>



                            <div className="flex justify-center">


                            </div>
                        </div>
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">NDR Funnel</p>
                            <hr />

                            <div className="flex  justify-center pt-5">
                                <ReactApexChart options={blankDonut.state.options} series={blankDonut.state.series} type='donut' width="100%" height="auto" />

                            </div>
                            <p className="lg:pl-48 pt-5">No Status Found</p>

                        </div>
                    </div>
                </div>





                <div>
                    <div className="bg-white p-5 my-10 rounded-xl">
                        <div className="">
                            <p className="flex justify-between"><span className="font-bold pb-4"> NDR Funnel</span> <span>Last 30 Days</span></p>
                            <hr />
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 justify-items-center py-5">

                                <div className="">
                                    <p className="pb-10 text-center">1st NDR</p>
                                    <ReactApexChart options={semicircle.options} series={semicircle.options.series} type='radialBar' width="90%" height="auto" />
                                    <hr />
                                    <p className="text-[10px] flex gap-5 pt-5">
                                        <span>{semicircle.options.labels[0]}</span>
                                        <span>{semicircle.options.labels[1]}</span>
                                        <span>{semicircle.options.labels[2]}</span>
                                    </p>
                                </div>
                                <div className="">
                                    <p className="pb-10 text-center">2nd NDR</p>
                                    <ReactApexChart options={semicircle.options} series={semicircle.options.series} type='radialBar' width="90%" height="auto" />
                                    <hr />
                                    <p className="text-[10px] flex gap-5 pt-5">
                                        <span>{semicircle.options.labels[0]}</span>
                                        <span>{semicircle.options.labels[1]}</span>
                                        <span>{semicircle.options.labels[2]}</span>
                                    </p>
                                </div>
                                <div className="">
                                    <p className="pb-10 text-center">3rd NDR</p>
                                    <ReactApexChart options={semicircle.options} series={semicircle.options.series} type='radialBar' width="90%" height="auto" />
                                    <hr />

                                    <p className="text-[10px] flex gap-5 pt-5">
                                        <span>{semicircle.options.labels[0]}</span>
                                        <span>{semicircle.options.labels[1]}</span>
                                        <span>{semicircle.options.labels[2]}</span>
                                    </p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>



                <div>
                    <div className="grid lg:grid-cols-2 py-10 gap-10">
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">Seller Response</p>
                            <hr />
                            <div className="flex justify-center py-4 px-2">
                                <div className="donut w-full">
                                    <Chart options={options} series={series} type="bar" width="100%" height='300px' />
                                </div>
                            </div>


                        </div>
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">NDR to Delivery Attempt</p>
                            <hr />
                            <div className="flex justify-center py-16">
                                <img src={img1} />
                            </div>

                        </div>
                    </div>
                </div>




                <div className="bg-white p-5 rounded-xl">
                    <table >
                        <thead className="border-b-2">
                            <tr  >
                                <th></th>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                                    return (
                                        <td className="text-center border-r-2 font-bold">NDR Shipments</td>
                                    )

                                })}
                                <th className="border-r-2">Lost / Damaged</th>

                            </tr>

                        </thead>

                        <tbody >
                            <tr className="border-b-2">
                                <td  >Total NDR Raised</td>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
                                    return (
                                        <td className="text-center border-r-2">0</td>
                                    )

                                })}

                            </tr>
                            <tr className="border-b-2">
                                <td>Seller Response</td>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
                                    return (
                                        <td className="text-center border-r-2">0</td>
                                    )

                                })}
                            </tr>
                            <tr className="border-b-2">
                                <td>Seller Positive Response</td>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
                                    return (
                                        <td className="text-center border-r-2">0</td>
                                    )

                                })}
                            </tr>
                            <tr className="border-b-2">
                                <td>Buyer Response</td>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
                                    return (
                                        <td className="text-center border-r-2">0</td>
                                    )

                                })}
                            </tr>
                            <tr className="border-b-2">
                                <td>Buyer Positive Response</td>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
                                    return (
                                        <td className="text-center border-r-2">0</td>
                                    )

                                })}
                            </tr>

                        </tbody>
                    </table>
                </div>




                <div>
                    <div className="grid lg:grid-cols-2 pt-10 gap-10">
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">Seller Response</p>
                            <hr />
                            <div className="flex justify-center py-16">
                                <img src={img1} />
                            </div>


                        </div>
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">Buyer Response</p>
                            <hr />
                            <div className="flex justify-center py-16">
                                <img src={img1} />
                            </div>

                        </div>
                    </div>
                </div>



                <div>
                    <div className="grid lg:grid-cols-2 pt-10 gap-10">
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">Success By Courier</p>
                            <hr />
                            <div className="p-2">
                                <table className="w-full ">
                                    <thead >
                                        <tr className="border-b-2" >
                                            <th></th>
                                            <th >Total</th>
                                            <th>Zone A</th>
                                            <th>Zone B</th>
                                            <th>Zone C</th>
                                            <th>Zone D</th>
                                            <th>Zone E</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr >
                                            <td className="border-b-2">NDR Raised</td>
                                            {[1, 2, 3, 4, 5, 6].map(() => {
                                                return (
                                                    <td className="text-center border-b-2 ">0</td>
                                                )

                                            })}

                                        </tr>
                                        <tr >
                                            <td>NDR Delivered</td>
                                            {[1, 2, 3, 4, 5, 6].map(() => {
                                                return (
                                                    <td className="text-center ">0</td>
                                                )

                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="bg-white rounded-xl">
                            <p className="pb-6 font-bold p-3">NDR Reason</p>
                            <hr />
                            <div className="flex justify-center py-16">
                                <img src={img1} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='h-64 w-full'>
        </div>
        </>

    )
}

export default NDR;
