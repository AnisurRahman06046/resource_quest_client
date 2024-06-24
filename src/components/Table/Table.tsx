// import { useEffect, useState } from "react";
// import Button from "../Button/Button";

// interface IData {
//   title: string;
//   link: string;
//   _id: string;
// }

// function Table() {
//   const accessToken = localStorage.getItem("access_token");
//   const [datas, setDatas] = useState<IData[]>([]);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/resource`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${accessToken}` },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.data) {
//           setDatas(result.data);
//         }
//       });
//   }, [accessToken]);

//   const handleDelete = (id: string) => {
//     fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/remove/${id}`, {
//       method: "DELETE",
//       headers: { Authorization: `Bearer ${accessToken}` },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.status === 200) {
//           // Update state to remove the deleted item
//           setDatas(datas.filter((data) => data._id !== id));
//         }
//       });
//   };

//   return (
//     <div className="relative lg:m-8 overflow-x-auto shadow-md">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         {/* Your table rendering code */}
//         <tbody>
//           {datas.length > 0 ? (
//             datas.map((d, index) => (
//               <tr
//                 key={index}
//                 className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
//               >
//                 <th
//                   scope="row"
//                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                 >
//                   {d.title}
//                 </th>
//                 <td className="px-6 py-4">
//                   <a
//                     href={d.link}
//                     className="text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     {d.link}
//                   </a>
//                 </td>
//                 <td className="px-6 py-4">
//                   <Button title="Edit"></Button>
//                 </td>
//                 <td onClick={() => handleDelete(d._id)} className="px-6 py-4">
//                   <Button title="Delete"></Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5} className="px-6 py-4 text-center">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;


// Table.tsx
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

interface IData {
  title: string;
  link: string;
  _id: string;
}

const Table: React.FC = () => {
  const accessToken = localStorage.getItem("access_token");
  const [datas, setDatas] = useState<IData[]>([]);
  const [editData, setEditData] = useState<IData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        if (result.status === 200) {
          setDatas(datas.filter((data) => data._id !== id));
        }
      });
  };

  const handleEdit = (data: IData) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleUpdate = (id: string, updatedData: Partial<IData>) => {
    fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/user/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          setDatas(datas.map((data) => (data._id === id ? { ...data, ...updatedData } : data)));
        }
      });
  };

  return (
    <div className="relative lg:m-8 overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          {datas.length > 0 ? (
            datas.map((d, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {d.title}
                </th>
                <td className="px-6 py-4">
                  <a
                    href={d.link}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {d.link}
                  </a>
                </td>
                <td onClick={() => handleEdit(d)} className="px-6 py-4">
                  <Button title="Edit"  />
                </td>
                <td onClick={() => handleDelete(d._id)} className="px-6 py-4">
                  <Button title="Delete" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditData(null);
        }}
        data={editData}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Table;
