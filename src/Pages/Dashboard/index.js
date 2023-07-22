import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import Overviews from "../../Pages/Overviews";
import WhatsappComm from "../WhatsappComm";
import RTO from "../RTO";
import Courier from "../Courier";
import classNames from "classnames";
import NDR from "../NDR";
import Order from '../Order'
import Shipment from "../Shipment";

export default function Dashboard() {
  const { headerData, handleHeader, sethandleHeader } = useContext(AppContext);


  return (
    <div>
      <div className="mt-10 flex items-center justify-between bg-[#F3E8FF] py-2 p">
        <div className="flex gap-8 text-[#2563EB] px-8 ">
          {headerData.map((singleData, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "cursor-pointer",
                  index === handleHeader && "border-b-2 border-[#2563EB]"
                )}
                onClick={() => sethandleHeader(index)}
              >
                <div key={index}>{singleData}</div>
              </div>
            );
          })}
        </div>
        <div className="">
          <select
            className="p-2 rounded-l-full outline-none rounded-r-full px-3 mr-8"
            name="select"
            id="select"
          >
            <option value="domestic">Domestic</option>
          </select>
        </div>
      </div>
      <div className="w-[80%] h-full ml-10 mt-4 fixed overflow-scroll">
        {handleHeader == 0 && <Overviews />}
        {handleHeader == 1 && <Order/>}
        {handleHeader == 2 && <Shipment/>}
        {handleHeader == 3 && <NDR />}
        {handleHeader == 4 && <WhatsappComm />}
        {handleHeader == 5 && <RTO />}
        {handleHeader == 6 && <Courier />}
      </div>
    </div>
  );
}
