import { useAppContext } from "@/app/context/ContextProvider";
import React, { useEffect, useState } from "react";

function Registrations() {
  const { data } = useAppContext();

  return (
    <>
      <div className="relative overflow-x-auto h-[79%] overflow-y-scroll">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              {data &&
                data.allPayments &&
                Object.keys(data.allPayments[0]).map((heading, index) => {
                  return (
                    <th scope="col" className="px-6 py-3" key={index}>
                      {heading}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.allPayments &&
              // <>{data.allPayments}</>

              data.allPayments.map((obj, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {obj.id}
                    </th>
                    <td className="px-3 py-2 w-fit">{obj.event_name}</td>
                    <td className="px-3 py-2 w-fit">{obj.status}</td>
                    <td className="px-3 py-2 w-fit">{obj.amount}</td>
                    <td className="px-3 py-2 w-fit">{obj.currency}</td>
                    <td className="px-3 py-2 w-fit">{obj.referral}</td>
                    <td className="px-3 py-2 w-fit">{obj.created_at}</td>
                    <td className="px-3 py-2 w-fit">{obj.team_name}</td>
                    <td className="px-3 py-2 w-fit">{obj.email}</td>
                    <td className="px-3 py-2 w-fit">{obj.college}</td>
                    <td className="px-3 py-2 w-fit">{obj.fname}</td>
                    <td className="px-3 py-2 w-fit">{obj.lname}</td>
                    <td className="px-3 py-2 w-fit">{obj.user_verified}</td>
                    <td className="px-3 py-2 w-fit">{obj.gender}</td>
                    <td className="px-3 py-2 w-fit">{obj.address}</td>
                    <td className="px-3 py-2 w-fit">{obj.dob}</td>
                    <td className="px-3 py-2 w-fit">{obj.phone}</td>
                    <td className="px-3 py-2 w-fit">{obj.year}</td>
                    <td className="px-3 py-2 w-fit">{obj.user_tag}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Registrations;
