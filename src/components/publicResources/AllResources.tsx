import { useEffect, useState } from "react";
interface IData {
    title: string;
    link: string;
    _id: string;
  }
function AllResources() {
    const [datas, setDatas] = useState<IData[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_SITE}/resources/public-resources`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.data) {
              setDatas(result.data);
            }
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
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
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2} className="px-6 py-4 text-center">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default AllResources;
