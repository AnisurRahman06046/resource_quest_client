



// // Modal.tsx
// import { useState } from "react";
// import Button from "../Button/Button";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   data: IData | null;
//   onUpdate: (id: string, updatedData: IData) => void;
// }

// interface IData {
//   title: string;
//   link: string;
//   _id: string;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, onUpdate }) => {
//   const [title, setTitle] = useState(data?.title || "");
//   const [link, setLink] = useState(data?.link || "");

//   const handleUpdate = () => {
//     if (data) {
//       onUpdate(data._id, { title, link });
//     }
//     onClose();
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative bg-white w-96 p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Edit Resource</h2>
//             <div className="mb-4">
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="link" className="block text-sm font-medium text-gray-700">
//                 Link
//               </label>
//               <input
//                 type="text"
//                 id="link"
//                 className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//               />
//             </div>
//             <div className="flex justify-end">
//                 <span onClick={handleUpdate}>

//               <Button title="Update"  />
//                 </span>
//                 <span className="ml-4" onClick={onClose} >

//               <Button title="Close" />
//                 </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;


// import { useState, useEffect } from "react";
// import Button from "../Button/Button";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   data: IData | null;
//   onUpdate: (id: string, updatedData: IData) => void;
// }

// interface IData {
//   title: string;
//   link: string;
//   _id: string;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, onUpdate }) => {
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");

//   useEffect(() => {
//     if (data) {
//       setTitle(data.title);
//       setLink(data.link);
//     }
//   }, [data]);

//   const handleUpdate = () => {
//     if (data) {
//       onUpdate(data._id, { title, link });
//     }
//     onClose();
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative bg-white w-96 p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Edit Resource</h2>
//             <div className="mb-4">
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="link" className="block text-sm font-medium text-gray-700">
//                 Link
//               </label>
//               <input
//                 type="text"
//                 id="link"
//                 className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//               />
//             </div>
//             <div className="flex justify-end">
//                 <span  onClick={handleUpdate}>

//               <Button title="Update" />
//                 </span>
//               <span className="ml-4" onClick={onClose}>
//                 <Button title="Close" />
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;


import { useState, useEffect } from "react";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IData | null;
  onUpdate: (id: string, updatedData: Partial<IData>) => void;
}

interface IData {
  title: string;
  link: string;
  _id: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setLink(data.link);
    }
  }, [data]);

  const handleUpdate = () => {
    if (data) {
      onUpdate(data._id, { title, link }); // Pass only title and link as Partial<IData>
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Resource</h2>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                Link
              </label>
              <input
                type="text"
                id="link"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
                <span onClick={handleUpdate}>

              <Button title="Update"  />
                </span>
              <span className="ml-4" onClick={onClose}>
                <Button title="Close" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
