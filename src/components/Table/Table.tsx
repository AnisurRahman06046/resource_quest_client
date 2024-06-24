// import { useEffect, useState } from "react";
// import Button from "../Button/Button";
// interface IData {
//     title: string;
//     link: string;
//     _id:string
//   }
// function Table() {
//   // const {token} = useContext(AuthContext)
//   const accessToken = localStorage.getItem("access_token");
// //   console.log(accessToken);
//   const [datas, setDatas] = useState<IData[]>([]);
//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/resource`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${accessToken}` },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((result) => {
//         console.log(result.data);
//         if (result.data) {
//             setDatas(result.data);
//           }
//       });
//   }, [accessToken]);
//   console.log(datas);
//   const handleDelete=(id:string)=>{
//     fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/remove/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${accessToken}` },
//       })
//         .then((res) => res.json())
//         .then((result) => {
//           if (result.success) {
//             setDatas(datas.filter((data) => data._id !== id));
//           }
//         });
//   }
//   return (
//     <div className="relative lg:m-8  overflow-x-auto shadow-md ">
//       <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3">
//               Title
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Link
//             </th>

//             <th scope="col" className="px-6 py-3">
//               Edit
//             </th>
//             <th scope="col" className="px-6 flex lg:gap-1 py-3">
//               <p>Edit/</p>
//               <p>Delete</p>
//             </th>
//           </tr>
//         </thead>
//         {/* <tbody>
//           {datas.map((d) => {
//             return (
//               <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th
//                   scope="row"
//                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                 >
//                   {d.title}
//                 </th>
//                 <td className="px-6 py-4"> <a href={d.link} className="text-blue-600 dark:text-blue-500 hover:underline">
//                     {d.link}
//                   </a></td>
//                 <td className="px-6 py-4">{d.description}</td>
//                 <td className="px-6 py-4">Edit</td>
//                 <td className="px-6 py-4">
//                   <a
//                     href="#"
//                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Delete
//                   </a>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody> */}
//         <tbody>
//           {datas.length > 0 ? (
//             datas.map((d, index) => (
//               <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.title}</th>
//                 <td className="px-6 py-4">
//                   <a href={d.link} className="text-blue-600 dark:text-blue-500 hover:underline">{d.link}</a>
//                 </td>
         
//                 <td className="px-6 py-4">
//                 <Button title="Edit"></Button>
//                 </td>
//                 <td  onClick={() => handleDelete(d._id)} className="px-6 py-4">
//                   {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a> */}
//                   <Button  title="Delete"></Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5} className="px-6 py-4 text-center">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;


import { useEffect, useState } from "react";
import Button from "../Button/Button";

interface IData {
  title: string;
  link: string;
  _id: string;
}

function Table() {
  const accessToken = localStorage.getItem("access_token");
  const [datas, setDatas] = useState<IData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/resource`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setDatas(result.data);
        }
      });
  }, [accessToken]);

  const handleDelete = (id: string) => {
    fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/remove/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          // Update state to remove the deleted item
          setDatas(datas.filter((data) => data._id !== id));
        }
      });
  };

  return (
    <div className="relative lg:m-8 overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {/* Your table rendering code */}
        <tbody>
          {datas.length > 0 ? (
            datas.map((d, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.title}</th>
                <td className="px-6 py-4">
                  <a href={d.link} className="text-blue-600 dark:text-blue-500 hover:underline">{d.link}</a>
                </td>
                <td className="px-6 py-4">
                  <Button title="Edit"></Button>
                </td>
                <td onClick={() => handleDelete(d._id)} className="px-6 py-4">
                  <Button title="Delete"></Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
