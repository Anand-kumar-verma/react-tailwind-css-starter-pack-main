import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../Images/graphimage.png";
import { Switch } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  
  const Shipment = () => {
    const data = {
      series: [
        {
          name: "shipment rate",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
  
        stroke: {
          show: true,
          width: [0, 2, 5],
        },
        xaxis: {
          categories: [
            "Zone A",
            "Zone B",
            "Zone C",
            "Zone D",
            "Zone E",
            "Zone F",
            "Zone G",
            "Zone H",
            "Zone I",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
    // simple chart
  
    const [population, setpopulation] = useState({
      state: {
        series: [70],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
              },
            },
          },
          labels: ["Total income"],
        },
      },
    });
  
    const base = [
      { name: "0", x: "4", y: "4k" },
      { name: "Ch 1", x: "2", y: "8k" },
      { name: "ch 2", x: "3", y: "1k" },
      { name: "Ch 3", x: "2", y: "7k" },
      { name: "Ch 4", x: "5", y: "2k" },
      { name: "Ch 5", x: "3", y: "3k" },
      { name: "Ch 6", x: "4", y: "5k" },
      { name: "Ch 7", x: "2", y: "6k" },
    ];
  
  
    // piegraph
  
        const[weight, setweight]=useState({  
    state :{
            
      series: [0.5,2 ,2.5, 3.5, 5],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['3.7kg', '14.8kg', '18.5kg', '25.9kg', '37kg'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            },
          },
        }],
      }
    }})
  
  
  
  
  
  
  
  
    const [open, setOpen] = useState(true);
    return (
        <>
          <div className="grid grid-cols-5 nav w-[80%] bg-[#F5F5F5] gap-2">
            <div className="text-blue-500">
              <div className="flex bg-white justify-between border-2 border-white rounded-xl p-2">
                <p>Jun 1,2023-jun 30,2023</p>
                <SlCalender />
              </div>
            </div>
    
            <div className="text-blue-500">
              <div className="flex bg-white justify-between border-2 border-white rounded-xl p-2">
                <p>Zone</p>
                <SlCalender />
              </div>
            </div>
    
            <div className="text-blue-500">
              <div className="flex bg-white justify-between border-2 border-white rounded-xl p-2">
                <p>Courier</p>
                <SlCalender />
              </div>
            </div>
    
            <div className="text-blue-500">
              <div className="flex bg-white justify-between border-2 border-white rounded-xl p-2">
                <p>Payment Mode</p>
                <SlCalender />
              </div>
            </div>
    
            <div className="text-blue-500">
              <div className="flex bg-white justify-between border-2 border-white rounded-xl p-2">
              Shipment Mode<p></p>
              <SlCalender />
          </div>
        </div>
      </div>
      <div className="bg-sky-100 mt-20 p-8">
        <div className="bg-white p-4 rounded-xl">
          <div className="justify-between flex">
            <p>Zone Wise Shipments</p> <span>Last 30 Days</span>
          </div>
          <hr className="mt-4" />

          <div className="">
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="bg-white mt-10 p-5 rounded-xl">
        <div className="grid grid-cols-5">
          <div>
            <p>Shipment Screen</p>
          </div>
          <div className=""></div>
          <div className=" text-right">
            <FontAwesomeIcon icon={faCircle} className="text-sky-300" />
            01-Jun-2023 30-Jun-2023
          </div>
          <div className="text-right">
            <FontAwesomeIcon icon={faCircle} className="text-sky-300" />
            02-may-2023 31-may-2023
          </div>
          <div className="text-center" onClick={() => setOpen(!open)}>
            {" "}
            <Switch />{" "}
          </div>
        </div>

        {open && (
          <div className="bg-white justify-center flex p-5">
            <div className="mt-5">
              <img src={img2} alt="" />
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-56  pt-8 ">
        <div className="bg-white p-6  rounded-xl">
          <div className="flex justify-between">
            <p>Shipment Channel</p>
            <span className="opacity-20">Last 30 Days</span>
          </div>
          <div className="flex justify-center mt-10">
            <div className="opacity-50">
              <ReactApexChart
                options={population.state.options}
                series={population.state.series}
                type="radialBar"
                height={350}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 opacity-30">
            <div></div>
            <div className="">
              <FontAwesomeIcon icon={faCircle} className="text-sky-300" />{" "}
              Prepaid
            </div>
            <div>
              <FontAwesomeIcon icon={faCircle} className="text-slate-300" />
              COD
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-white p-6   rounded-xl">
          <div className="flex justify-between">
            <p>Shipment Zone</p>
            <span className="opacity-20">Last 30 Days</span>
          </div>
          <div className="flex justify-center mt-10">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

          
      <div className="grid grid-cols-2 mt-10 gap-56 mb-64">
        <div className="bg-white rounded-xl p-2">
          <div className="">
            <p>Shipment's Channel</p>
          </div>
          <div className="">
            {" "}
            <AreaChart width={500} height={500} data={base}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area dataKey="x" stackId="1" stroke="#DBE3FE" fill="#DBE3FE" />
              <Area dataKey="y" stackId="1" stroke="white" fill="white" />
            </AreaChart>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-2 ">
          <div>
            <p>Weight Profile(in kgs)</p>
          </div>
          <hr />
          <div className="flex justify-center mt-20"><ReactApexChart options={weight.state.options} series={weight.state.series} type="pie" width={380} />
          </div>
              </div>
        </div>
        </>
  );
};
export default Shipment;