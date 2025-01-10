/* eslint-disable react/prop-types */

import { format } from "date-fns";


import { CiEdit } from "react-icons/ci";

import { MdOutlineDeleteOutline } from "react-icons/md";


const MyCarTable = ({car,handleUpdate,handleDelete}) => {

    const {_id,photo,carModel,dailyRentalPrice,availability,datePosted,bookingCount}=car || {}
 
    return (
 <>
             
      <tr className="hover h-32">
   
        <td>
          <div className="flex items-center gap-3">
            <div className="">
              <div className="h-20 md:h-32 w-60">
                <img
                className="h-full w-full object-cover rounded-2xl"
                  src={photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
       
          </div>
        </td>
        <td>      <div className="font-bold text-xl md:text-3xl">{carModel}</div></td>
        <td>
      
       $ {dailyRentalPrice} /day
        </td>
        <td className="text-center text-xl">{bookingCount}</td>
        <td><span className={`${availability=== 'Available' ?'bg-green-100  border-green-400 text-green-800':'bg-red-100  border-red-400 text-red-800'} text-xs font-medium me-2 px-2.5 py-0.5 rounded `}>{availability}</span></td>
        <td>
        {format(new Date(datePosted),'dd-MM-yyyy HH:mm')}
        </td>
        <th className="*:text-2xl">
          <button  onClick={()=>handleUpdate(_id)} className="hover:text-amber-600 "><CiEdit /></button>
          <button onClick={()=>handleDelete(_id)} className="hover:text-red-600 ml-2"><MdOutlineDeleteOutline /></button>
        </th>
      </tr>






      
      </>
    );
};

export default MyCarTable;