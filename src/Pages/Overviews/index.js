import React,{useContext,useState} from 'react'
import { AppContext } from '../../AppContext';
import ReactApexChart from 'react-apexcharts';

import { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Overviews() {

  const [zoneDestribution, setzoneDestribution] = useState({
    state : {
          
      series: [{
        name: '',
        type: 'column',
        data: [2, 10, 20, 7, 3]
      }, {
        name: '',
        type: 'area',
        data: [4, 5, 4, 7, 10]
      }, ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '30%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            gradientToColors: 'primary',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'Servings'
        },
        yaxis: {
          title: {
            text: 'Servings',
          },
          categories:[
            0,0,0,0,0
          ],
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
        
            }
          }
        }
      }
  }
})

const [state, setstate] = useState({
   options : {
    animationEnabled: true,
    exportEnabled: true,
    theme: "",
    title:{
      text: ""
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",		
      startAngle: -90,
      dataPoints: [
        { y: 20, label: "COD Pending" },
        { y: 24, label: "Last COD Remitted" },
        { y: 20, label: "Total COD" },
        { y: 30, label: "COD Available" }
      ]
    }]
  }
});

// chart 1 ,2 data points
    const [data,setData] =useState({
        series: [44, 55, 41, 17, 15],
          options: {
          chart: {
          type: "donut",
          },
          responsive: [
          {
          breakpoint: 480,
          options: {
          chart: {
          width: 200,
          },
          legend: {
          position: "bottom",
          },
          },
          },
          ],
          },
      })

      const [curiesData, setcuriesData] = useState({
        state : {
          label: [44, 55, 13, 33],
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
          }
      }
    })

    const [shipmentData, setshipmentData] = useState({
      state : {
        
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
        }
    }
  })

      // chart 3 data points
      const [shipmentDetails, setshipmentDetails] = useState({
        state : {
      
          series: [{
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43]
          }],
          options: {
            annotations: {
              points: [{
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                  borderColor: '#775DD0',
                  offsetY: 0,
                  style: {
                    color: '#fff',
                    background: '#775DD0',
                  },
                  text: 'Bananas are good',
                }
              }]
            },
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '30%',
              }
            },
            dataLabels: {
              enabled:false
            },
            stroke: {
              width: 2
            },
            
            grid: {
              row: {
                colors: ['#fff', '#f2f2f2']
              }
            },
            xaxis: {
              labels: {
                rotate: -45
              },
              categories: [
                'TS','PP','In-T','Del','NDR-P','RTO'
              ],
              tickPlacement: 'on'
            },
            yaxis: {
              title: {
                text: 'Servings',
              },
              categories:[
                '20k','40k','60k','80k','100k'
              ]
                
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
              },
            }
          },
        
        
        }
      });

      // chart -4    
      const [ndrDetails, setndrDetails] = useState( {
          
        series: [76, 67, 61, 90],
        options: {
          chart: {
            height: 390,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 6,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                }
              }
            }
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
          legend: {
            show: true,
            floating: true,
            fontSize: '15px',
            position: 'right',
            offsetX: 160,
            offsetY: 15,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0
            },
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
              vertical: 3
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                  show: false
              }
            }
          }]
        },
      
      
      }
    

      );
     
    const {homeCardData} = useContext(AppContext);


  return (
    <div className='h-auto w-[100%] bg-[#F5F5F5]'>
        <div className='w-full text-white bg-red-500 flex justify-center py-3 rounded-lg'>
            <div>CLick hereto complete your KYC and get non-disrupted shipping and COD remittaces</div>
        </div>
        <div className='w-full mt-5 text-white bg-gradient-to-r from-yellow-300 to-white flex justify-center py-8' >
                <div className='text-amber-700 font-bold'>THIS SPACE FOR BANNER</div>
        </div>
        <div className='w-full h-5 flex justify-center mt-2 gap-3'>
            <div className='w-2 h-2 rounded-full bg-slate-600'></div>
            <div className='w-2 h-2 rounded-full bg-slate-600'></div>
            <div className='w-2 h-2 rounded-full bg-slate-600'></div>
        </div>
        <div className='w-full flex gap-20'>
                {
                    homeCardData.map((singleData,index)=>{
                        return <div className={`${index===0 && 'bg-[#F3E8FF]'} ${index === 1 && 'bg-[#D9FFE7]'} ${index=== 2 && 'bg-[#D2F1FF]'} p-5 py-7 w-2/5 flex flex-col gap-3  rounded-lg`}>
                                <div className='flex justify-between'>
                                    <div>lo</div>
                                    <div><span  className={`${index===0 && 'text-[#9333EA]'} ${index === 1 && 'text-[#08B749]'} ${index=== 2 && 'text-[#4318FF]'}`}>{singleData.day} {" "} {singleData.dayRs}</span></div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className={`${index===0 && 'text-[#9333EA]'} ${index === 1 && 'text-[#08B749]'} ${index=== 2 && 'text-[#4318FF]'}`}>{singleData.title}</div>
                                    <div className='text-[#8B8D97] text-sm'>Volume</div>
                                </div>
                                <div className='flex justify-end'><span  className={`${index===0 && 'text-[#9333EA]'} ${index === 1 && 'text-[#08B749]'} ${index=== 2 && 'text-[#4318FF]'}`}>Rs. {singleData.volumeRs}</span></div>
                        </div>
                    })
                   
                  }
        </div>

          {/* chart 1,6 */}
        <div className='  flex justify-between  mt-10'>
              <div className='p-5 w-[40%] bg-[#FFFF] rounded-lg'>
                <div className='flex justify-between'>
                   <p>Curious Split</p>
                   <p className='opacity-50'>Last 30 days</p>
                </div>
                <hr />
                <div className='opacity-50'>
                <ReactApexChart 
                options={curiesData.state.options} 
                series={curiesData.state.label} 
                type="donut" 
                width={380} />
                </div>
             
              </div>
              
              <div className='w-[40%] h-full p-5 bg-[#FFFF] rounded-lg'>
                   
            
                 <ReactApexChart
                    options={data.options}
                    series={data.series}
                    type="donut"
                    width="100%"
                    />
              
              </div>

         </div>

{/* // CHART ROW SECTION -2 */}
         <div className=' flex justify-between items-center mt-10'>
              <div className='p-5 w-[40%] bg-[#FFFF] rounded-lg'>
                <div className='flex justify-between'>
                   <p>Shipment Details</p>
                   <p className='opacity-50'>Last 30 days</p>
                </div>
                <hr />
                <div className='opacity-50 mt-2'>
                <ReactApexChart 
                options={shipmentDetails.state.options} 
                series={shipmentDetails.state.series} 
                type="bar" 
                height={350} />
                </div>
             
              </div>
              
              <div className='w-[40%] h-full p-5 bg-[#FFFF] rounded-lg'>
                <div className='flex justify-between'>
                   <p>NDR Details</p>
                   <p className='opacity-50'>Last 30 days</p>
                   
                </div>
                <hr />
            
              <ReactApexChart 
              options={ndrDetails.options} 
              series={ndrDetails.series} 
              type="radialBar" 
              height={390} />
              
              </div>

         </div>


         {/* // CHART ROW SECTION -3 */}
         <div className='  flex justify-between items-center mt-10'>
              <div className='p-5 w-[40%] bg-[#FFFF] rounded-lg'>
                <div className='flex justify-between'>
                   <p>COD Status</p>
                   <p className='opacity-50'>Last 30 days</p>
                </div>
                <hr />
                <div className='mt-2'>
                    <CanvasJSChart options = {state.options} 
                    /* onRef={ref => this.chart = ref} */
                  />
                </div>
             
              </div>
              
              <div className='p-5 w-[40%] bg-[#FFFF] rounded-lg'>
                <div className='flex justify-between'>
                   <p>Overall Shipment Status</p>
                   <p className='opacity-50'>Last 30 days</p>
                </div>
                <div className='opacity-50'>
                  <ReactApexChart 
                  options={shipmentData.state.options} 
                  series={shipmentData.state.series} 
                  type="donut" 
                  width={380} />
                </div>
               
             
              </div>

         </div>




         <div className='bg-red-100   flex justify-between items-center mt-10'>
              <div className='p-5 w-[100%] bg-[#FFFF] rounded-lg'>
                <div className='flex justify-between'>
                   <p>Shipments-Zone Destribution</p>
                   <p className='opacity-50'>Last 30 days</p>
                </div>
                <div className='opacity-50'>
                    <ReactApexChart 
                    options={zoneDestribution.state.options} 
                    series={zoneDestribution.state.series} 
                    type="line" 
                    height={350} 
                    />
                </div>
               
             
              </div>

         </div>
         <div className=' flex justify-between items-center mt-10 h-60'>
            
         </div>
        </div>

  )
}
