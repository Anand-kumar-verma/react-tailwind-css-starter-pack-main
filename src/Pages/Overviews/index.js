import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import ReactApexChart from "react-apexcharts";
import DatamapsIndia from "react-datamaps-india";
import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import Loding from "../../component/Loding";
import axios from "axios";
import { toast } from "react-toastify";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Overviews() {

  const { baseUrl, endPoints, loding, setloding,cid,setcid } = useContext(AppContext);

  const [codvalues, setcodvalues] = useState({});
  const [orderdaywiseinmap, setorderdaywiseinmap] = useState(1);
  const [mapdata, setmapdata] = useState([]);
  const [gettodaysorder, setgettodaysorder] = useState({});
  const [getrevenue, setgetrevenue] = useState({});
  const [getaverageshipping, setgetaverageshipping] = useState({});
  const [getrevenuelastsevendays, setgetrevenuelastsevendays] = useState([]);
  const [deliveryPerformanceData, setdeliveryPerformanceData] = useState([]);
 const [statessuperadmin, setstatessuperadmin] = useState([]);

  // get all orders statewise
  async function getStateOrders(day) {
    setloding(true);
    const pday = day > 0 && day <= 30 ? day : 1;
    try {
      const res = await axios.get(
        `${baseUrl}${endPoints.endorderstatewise}${pday}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.data.msg === "Data Retrieved Successfully") {
        // console.log(res.data.msg);
        toast.success(res.data.msg);
        
      }
      setmapdata(res.data.data);
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }
  // orders by super admin and with company and without company
  async function getStateOrderswithandwithoutcompany() {
    setloding(true);
    var  url = `${baseUrl}${endPoints.endgetallorderlist}`
    if(cid != null && cid != "selectcompany"){
      // console.log("valuesetwithcomany")
      url = `${baseUrl}${endPoints.endgetorderlistcompanywise}${cid}`
      
    }else{
      // console.log("valuesetwithoutcomany")
      url = `${baseUrl}${endPoints.endallcodvalues}`
    }

    try {
      const res = await axios.get(
        `${baseUrl}${endPoints.endgetallorderlist}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setstatessuperadmin(res.data)
     

    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }
 

  useEffect(() => {

    if(localStorage.getItem("role") === "superadmin"){
      getStateOrderswithandwithoutcompany();
    }else{
      getStateOrders(orderdaywiseinmap);
    }
    // getStateOrderswithandwithoutcompany()

  }, [orderdaywiseinmap]); 


    // get todays orders
    async function getTodaysOrder() {
      setloding(true);
      var url = `${baseUrl}${endPoints.endtodaysorder}`
      
      if(localStorage.getItem("role") === "superadmin"){
        if(cid != null && cid != "selectcompany"){
          // console.log("valuesetwithcomany")
          url = `${baseUrl}${endPoints.endtodaysallordercompanywise}${cid}`
          
        }else{
          // console.log("valuesetwithoutcomany")
          url = `${baseUrl}${endPoints.endtodaysallorder}`
        }
      }else{
        url = `${baseUrl}${endPoints.endtodaysorder}`
      }
      try {
        const res = await axios.get(
          url,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (res.data.msg === "Data Retreived Sucessfully") {
          // console.log(res.data.msg);
          toast.success(res.data.msg);
        }

        setgettodaysorder(res.data.data);
        // console.log(res)
      } catch (e) {
        toast.warn("Something went wrong !")
        console.log(e);
      }
      setloding(false);
    }
  
  

    useEffect(() => {
      getTodaysOrder();
    }, [cid]);



    // console.log(gettodaysorder)

    // console.log(gettodaysorder)

 

  // get cod status
  async function getCodStatus() {
    setloding(true);
    var url = `${baseUrl}${endPoints.endcodvalues}`
      
      if(localStorage.getItem("role") === "superadmin"){
        if(cid != null && cid != "selectcompany"){
          // console.log("valuesetwithcomany")
          url = `${baseUrl}${endPoints.endallcodvaluescompanywise}${cid}`
          
        }else{
          // console.log("valuesetwithoutcomany")
          url = `${baseUrl}${endPoints.endallcodvalues}`
        }
      }else{
        url = `${baseUrl}${endPoints.endcodvalues}`
      }

    try {
      const res = await axios.get(
        url
        , {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      
      setcodvalues(res.data);
    } catch (e) {
      toast.error("Something went wrong !")
      // console.log(e);
    }
    setloding(false);
  }

  useEffect(() => {
    getCodStatus();
  }, []);


  // get todays revenue
  async function getRevenue() {
    setloding(true);
    var url = `${baseUrl}${endPoints.endrevenue}`
      
    if(localStorage.getItem("role") === "superadmin"){
      if(cid != null && cid != "selectcompany"){
        // console.log("valuesetwithcomany")
        url = `${baseUrl}${endPoints.endgetallrevenuecompanywise}${cid}`
        
      }else{
        // console.log("valuesetwithoutcomany")
        url = `${baseUrl}${endPoints.endgetallrevenue}`
      }
    }else{
      url = `${baseUrl}${endPoints.endtodaysorder}`
    }

    try {
      const res = await axios.get(
        url
        , {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (res.data.msg === "Data Retreived Sucessfully") {
        // console.log(res.data.msg);
        toast.success(res.data.msg);
        
      }else{
        toast.error("Something went wrong !")
      }
      setgetrevenue(res.data.data);
      
    } catch (e) {
      toast.warn("Something went wrong !")
      console.log(e);
    }
    setloding(false);
  }

  useEffect(() => {
    getRevenue();
  }, []);


  // get average shipping data form api
  async function getAverageShippingReport() {
    setloding(true);
    
    try {
      const res = await axios.get(`${baseUrl}${endPoints.endorderaveragereport}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setgetaverageshipping(res.data.average_revenue_by_status);
    } catch (e) {
      toast.warn("Something went wrong !")
      console.log(e);
    }
    setloding(false);
  }

  async function getAverageShippingReportwithcompanyandwithoutcompany() {
    setloding(true);
    var url = `${baseUrl}${endPoints.enddeliveryperformance}`

    if(cid != null && cid != "selectcompany"){
      url = `${baseUrl}${endPoints.enddeliveryperformancecompanywise}${cid}`
    }else{
      url = `${baseUrl}${endPoints.enddeliveryperformance}`
    }

    try {
      const res = await axios.get(
        url
        , {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setgetaverageshipping(res?.data?.data)
      setdeliveryPerformanceData(res?.data?.data)

    } catch (e) {
      toast.warn("Something went wrong !")
      console.log(e);
    }
    setloding(false);
  }

  useEffect(() => {

    if(localStorage.getItem("role") === "superadmin"){
      getAverageShippingReportwithcompanyandwithoutcompany();
      
    }else{
      getAverageShippingReport();
    }
    
  }, []);
  // console.log(getaverageshipping)

console.log( getaverageshipping)


  const homeCardData = [
      {
      title:"Today's Order",
      day:'Yesterday',
      dayRs:gettodaysorder.yesterday_order_count,
      volumeRs:gettodaysorder.today_order_value
  },
      {
      title:"Last 7 Days Revenue",
      day:'Last 30 Days',
      dayRs:getrevenue.last_30_days_revenue,
      volumeRs:getrevenue.last_7_days_revenue
      
  },
      {
      title:"Average Shipment",
      day:'Pending',
      dayRs:getaverageshipping.length > 0 ? getaverageshipping[3].count : getaverageshipping.average_pending,
      volumeRs:getaverageshipping.length > 0 ? getaverageshipping[2].count : getaverageshipping.average_delivered
  }
      ]


      async function getRevenueLast7Days() {
        setloding(true);
        try {
          const res = await axios.get(`${baseUrl}${endPoints.endrevenuelastsevendays}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          });
          if (res?.statusText === "OK") {
            setgetrevenuelastsevendays(res.data.data);
          }else{
            toast.error("Something went wrong !")
          }
          
          
        } catch (e) {
          toast.warn("Something went wrong !")
          console.log(e);
        }
        setloding(false);
      }
    
      useEffect(() => {
        getRevenueLast7Days();
      }, []);



     
      const days = []
      const daysData = []
      
      getrevenuelastsevendays.map((singleData,index)=>{
         days.push(singleData.weekname.charAt(0))
         daysData.push(singleData.value)
      })

      console.log(days)
      console.log(daysData)
      // console.log(days)
      // console.log(daysData)
      // const [daysstate, setdaysstate] = useState([]);
      // const [daysdatastate, setdaysdatastate] = useState([ ]);
      // setdaysstate(days)
      // setdaysdatastate(daysData)


  // revenue last 7 days graph DATA
  const [revenue, setrevenue] = useState({
    state: {
      series: [
        {
          name: "",
          type: "column",
          data: [23],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "40%",
          },
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            gradientToColors: "primary",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: days,
        markers: {
          size: 0,
        },
        xaxis: {
          type: "Servings",
        },
        yaxis: {
          title: {
            text: "Servings",
          },
          categories: [0, 0, 0, 0, 0],
          min: 0,
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
            },
          },
        },
      },
    },
  });

  


  // get zone destribution dat from api
  const zone = []
  const zoneValues = []

    useEffect(()=>{
      console.log(mapdata)
      mapdata.map((singleData,index)=>{
          zone.push(singleData.drop_location__state)
          zoneValues.push(singleData.count)
      })
      console.log(zone)
      console.log(zoneValues)
    },[mapdata])

  // zone destribution  data
  const [zoneDestribution, setzoneDestribution] = useState({
    state: {
      series: [
        {
          name: "",
          type: "column",
          data: zoneValues,
        },
        {
          name: "",
          type: "area",
          data: [4, 5, 4, 7, 10],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "30%",
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            gradientToColors: "primary",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: zone,
        markers: {
          size: 0,
        },
        xaxis: {
          type: "Servings",
        },
        yaxis: {
          title: {
            text: "Servings",
          },
          categories: [0, 0, 0, 0, 0],
          min: 0,
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
            },
          },
        },
      },
    },
  });



  const codStatus = {
    options: {
      animationEnabled: true,
      exportEnabled: true,
      theme: "",
      title: {
        text: "",
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: -90,
          dataPoints: [
            { y: codvalues?.pending_cod, label: "COD Pending" },
            { y: codvalues?.total_cod, label: "Total COD" },
            { y: codvalues?.cod_available, label: "COD Available" },
          ],
        },
      ],
    },
  };

  // chart 1 ,2 data points
  const [data, setData] = useState({
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
  });

  const [curiesData, setcuriesData] = useState({
    state: {
      label: [44, 55, 13, 33],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            labels: [
              "Status 1",
              "Status 1",
              "Status 1",
              "Status 1",
              "Status 1",
            ],
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
        },
      },
    },
  });

  const [shipmentData, setshipmentData] = useState({
    state: {
      series: [44, 55, 13, 33],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
        },
      },
    },
  });

  // chart 3 data points
  const [shipmentDetails, setshipmentDetails] = useState({
    state: {
      series: [
        {
          name: "Servings",
          data: [44, 55, 41, 67, 22, 43],
        },
      ],
      options: {
        annotations: {
          points: [
            {
              x: "Bananas",
              seriesIndex: 0,
              label: {
                borderColor: "#775DD0",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#775DD0",
                },
                text: "Bananas are good",
              },
            },
          ],
        },
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: "30%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"],
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: ["TS", "PP", "In-T", "Del", "NDR-P", "RTO"],
          tickPlacement: "on",
        },
        yaxis: {
          title: {
            text: "Servings",
          },
          categories: ["20k", "40k", "60k", "80k", "100k"],
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
          },
        },
      },
    },
  });

  // chart -4
  const [ndrDetails, setndrDetails] = useState({
    series: [76, 67, 61, 90],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 6,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      legend: {
        show: true,
        floating: true,
        fontSize: "15px",
        position: "right",
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  const deliveryPerformance = {
    // series: [deliveryPerformanceData[3].count, 
    // deliveryPerformanceData[3].count,
    // deliveryPerformanceData[3].count],
    series: [12,34,56],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 6,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0077B5"],
      labels: ["Pending", "Accepted","Delivered"],
      legend: {
        show: true,
        floating: true,
        fontSize: "15px",
        position: "right",
        offsetX: 250,
        offsetY: 25,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };

 
 
  
  // console.log(mapdata)
  const mappedObject = {};

  if(localStorage.getItem("role") === "superadmin"){
    statessuperadmin.map((singleData,index) => (mappedObject[singleData?.drop_location?.state] =  {value:Number(`${singleData?.total_order_value}`)} ));

  }else{
    mapdata.map((singleData,index) => (mappedObject[singleData?.drop_location__state] =  {value:`${singleData.count}`} ));

  }
  // ge

  // console.log(mappedObject); 

  return (
    <div className="h-auto w-[100%] bg-[#F5F5F5]">
      <div className="w-full text-white bg-red-500 flex justify-center py-3 rounded-lg">
        <div>
          CLick hereto complete your KYC and get non-disrupted shipping and COD
          remittaces
        </div>
      </div>
      <div className="w-full mt-5 text-white bg-gradient-to-r from-yellow-300 to-white flex justify-center py-8">
        <div className="text-amber-700 font-bold">THIS SPACE FOR BANNER</div>
      </div>
      <div className="w-full h-5 flex flex-wrap justify-center mt-2 gap-3">
        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
      </div>
      <div className="w-full flex justify-between flex-wrap">
        {homeCardData.map((singleData, index) => {
          return (
            <div
              className={`${index === 0 && "bg-[#F3E8FF]"} ${
                index === 1 && "bg-[#D9FFE7]"
              } ${
                index === 2 && "bg-[#D2F1FF]"
              } p-5 py-7 w-[22rem] flex flex-col gap-3  rounded-lg`}
            >
              <div className="flex justify-between">
                <div>lo</div>
                <div>
                  <span
                    className={`${index === 0 && "text-[#9333EA]"} ${
                      index === 1 && "text-[#08B749]"
                    } ${index === 2 && "text-[#4318FF]"}`}
                  >
                    {singleData.day} {singleData.dayRs}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div
                  className={`${index === 0 && "text-[#9333EA]"} ${
                    index === 1 && "text-[#08B749]"
                  } ${index === 2 && "text-[#4318FF]"}`}
                >
                  {singleData.title}
                </div>
                <div className="text-[#8B8D97] text-sm">Volume</div>
              </div>
              <div className="flex justify-end">
                <span
                  className={`${index === 0 && "text-[#9333EA]"} ${
                    index === 1 && "text-[#08B749]"
                  } ${index === 2 && "text-[#4318FF]"}`}
                >
                  {index != 2 ? "Rs." : "Delivered"} {singleData.volumeRs}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* chart 1,6 */}
      <div className=" flex justify-between h-auto flex-wrap mt-10 ">
        {/* // Graph 1 */}
        <div className=" w-auto p-5 py-10 bg-[#FFFF] rounded-lg mt-20">
          <div className="flex justify-between">
            <p>Couriers Split</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <hr />
          <div className="opacity-50 py-10">
            <ReactApexChart
              options={curiesData.state.options}
              series={curiesData.state.label}
              type="donut"
              width={380}
            />
          </div>
        </div>

        {/* // Indias Map?/? */}
        <div className="h-full w-[50%] rounded-lg">
        {
          localStorage.getItem("role") != "superadmin" 
          && 
          <div className="flex gap-3">
            <label htmlFor="days">Choose Days:</label>
            <input
              type="number"
              placeholder="Select Days"
              className="outline-none"
              onChange={(e) => setorderdaywiseinmap(e.target.value)}
            />
          </div>
        }
         
          <div style={{ position: "relative" }}>
            <DatamapsIndia
              style={{ postion: "relative", left: "" }}
              regionData={
                mappedObject
              }
              mapLayout={{
                title: "Orders",
                legendTitle: "Number of OCs",
                startColor: "#005ce6",
                endColor: "#005ce6",
                hoverTitle: "Count",
                noDataColor: "#B3CCDE",
                borderColor: "#8D8D8D",
                hoverColor: "blue",
                hoverBorderColor: "green",
                height: 10,
                weight: 30,
              }}
            />
          </div>
        </div>
      </div>

      {/* // CHART ROW SECTION -2 */}
      <div className=" flex flex-wrap justify-between items-center mt-48">
        <div className="p-5 bg-[#FFFF] rounded-lg px-20">
          <div className="flex justify-between">
            <p>Shipment Details</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <hr />
          <div className="opacity-50 mt-2">
            <ReactApexChart
              options={shipmentDetails.state.options}
              series={shipmentDetails.state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className=" h-full p-5 bg-[#FFFF] rounded-lg w-[40%]">
          <div className="flex justify-between">
            <p>NDR Details</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <hr />

          <ReactApexChart
            options={ndrDetails.options}
            series={ndrDetails.series}
            type="radialBar"
            height={390}
          />
        </div>
      </div>

      {/* // CHART ROW SECTION -3 */}
      <div className="  flex flex-wrap justify-between items-center mt-10">
        <div className="p-5 w-[40%] bg-[#FFFF] rounded-lg">
          <div className="flex justify-between">
            <p>COD Status</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <hr />
          <div className="mt-2">
            {loding ? (
              <Loding />
            ) : (
              <CanvasJSChart
                options={codStatus.options}
                /* onRef={ref => this.chart = ref} */
              />
            )}
          </div>
        </div>

        <div className="bg-[#FFFF] rounded-lg p-20">
          <div className="flex justify-between">
            <p>Overall Shipment Status</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <div className="opacity-50">
            <ReactApexChart
              options={shipmentData.state.options}
              series={shipmentData.state.series}
              type="donut"
              width={380}
            />
          </div>
        </div>
      </div>

      {/* // section 4  */}
      <div className="  flex flex-wrap justify-between items-center mt-10">
        <div className=" h-full p-5 bg-[#FFFF] rounded-lg w-[40%]">
          <div className="flex justify-between">
            <p>Delivey Performance</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <hr />

          <ReactApexChart
            options={deliveryPerformance.options}
            series={deliveryPerformance.series}
            type="radialBar"
            height={390}
          />
        </div>
        <div className="p-5 w-[40%] bg-[#FFFF] rounded-lg">
          <div className="flex justify-between">
            <p>Revenue</p>
            <p className="opacity-50">This Week</p>
          </div>
          <hr />
          <div className="mt-2">
            {loding ? (
              <Loding />
            ) : (
              <ReactApexChart
                options={revenue.state.options}
                series={revenue.state.series}
                type="line"
                height={350}
              />
            )}
          </div>
        </div>
      </div>

      {/* // zone distribution */}
      <div className="bg-red-100   flex flex-wrap justify-between items-center mt-10">
        <div className="p-5 w-[100%] bg-[#FFFF] rounded-lg">
          <div className="flex justify-between">
            <p>Shipments-Zone Destribution</p>
            <p className="opacity-50">Last 30 days</p>
          </div>
          <div className="opacity-50">
            <ReactApexChart
              options={zoneDestribution.state.options}
              series={zoneDestribution.state.series}
              type="line"
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-col  justify-end ">
        <div>Shipments Overview by Courier</div>
        <hr />
        <table class="mt-8 table-auto">
          <thead>
            <tr className="text-sm">
              {[
                "Pickup Unscheduled",
                "Pickup Scheduled",
                "In-Transit",
                "Deliverd",
                "NDR Raised",
                "NDR Pending",
                "RTO",
                "Lost/Damaged",
                "Total Shipment",
              ].map((singleData, index) => {
                return <th key={index}>{singleData}</th>;
              })}
            </tr>
          </thead>
          <tbody className="">
            {[1, 2, 3, 4].map((singleData, index) => {
              return (
                <tr className="text-center">
                  {["", "", , "", "", "", "", "", ""].map(
                    (singleData, index) => {
                      return <td key={index}>{singleData}</td>;
                    }
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full mt-20">
          <p className="text-center">Courirs data not found this filter</p>
        </div>
      </div>
      <div className=" flex justify-between items-center mt-10 h-60"></div>
    </div>
  );
}
