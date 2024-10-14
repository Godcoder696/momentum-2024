import { useAppContext } from '@/app/context/ContextProvider';
import React from 'react'

function Users({search}) {
  const {data}= useAppContext();
  return (
    <>
      <div className="relative overflow-x-auto h-[79%] overflow-y-scroll">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              {data &&
                data.allUsers &&
                Object.keys(data.allUsers[0]).map((heading, index) => {
                  if(heading=="__v" || heading=="events") return <React.Fragment key={index}></React.Fragment>
                  else{
                    return (
                      <th scope="col" className="px-6 py-3" key={index}>
                        {heading}
                      </th>
                    );
                  }
                })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.allUsers &&
              data.allUsers.map((obj, index) => {
                return (
                    (
                      obj.email.toLowerCase().includes(search.toLowerCase()) || 
                      obj.collegeName.toLowerCase().includes(search.toLowerCase()) || 
                      obj.fname.toLowerCase().includes(search.toLowerCase())|| 
                      obj.lname.toLowerCase().includes(search.toLowerCase())|| 
                      obj.role.toLowerCase().includes(search.toLowerCase())|| 
                      obj.gender.toLowerCase().includes(search.toLowerCase())|| 
                      (obj.pNumber+"").toLowerCase().includes(search.toLowerCase())|| 
                      (obj.tag+"").toLowerCase().includes(search.toLowerCase())|| 
                      (obj.year+"").toLowerCase().includes(search.toLowerCase())
                    ) ?
                    <>
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {obj._id}
                        </th>
                        <td className="px-3 py-2 w-fit">{obj.email}</td>
                        <td className="px-3 py-2 w-fit">{obj.collegeName}</td>
                        <td className="px-3 py-2 w-fit">{obj.fname}</td>
                        <td className="px-3 py-2 w-fit">{obj.lname}</td>
                        <td className="px-3 py-2 w-fit">{obj.createdAt}</td>
                        <td className="px-3 py-2 w-fit">{obj.modifiedAt}</td>
                        <td className="px-3 py-2 w-fit">{obj.role}</td>
                        <td className="px-3 py-2 w-fit">{obj.email}</td>
                        <td className="px-3 py-2 w-fit">{obj.gender}</td>
                        <td className="px-3 py-2 w-fit">{obj.address}</td>
                        <td className="px-3 py-2 w-fit">{obj.dob}</td>
                        <td className="px-3 py-2 w-fit">{obj.pNumber}</td>
                        <td className="px-3 py-2 w-fit">{obj.tag}</td>
                        <td className="px-3 py-2 w-fit">{obj.year}</td>
                      </tr>
                    </>
                    :
                    <React.Fragment key={index}/>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users
