import Button from "../Button/Button";

function AddResource() {
  return (
<div className="mx-auto w-full px-16">
<form className=" mx-auto mt-36">
      <div className="mb-5">
        <label className="block mb-2 lg:text-xl text-sm font-bold text-white dark:text-white">
          Title
        </label>
        <input
          type="text"
        
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ex: Docker"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm lg:text-xl font-bold text-white dark:text-white">
          Link
        </label>
        <input
          type="text"
          placeholder="www.docker/tutorial.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          
          className="block mb-2 text-sm lg:text-xl font-bold text-white dark:text-white"
        >
          Description
        </label>
        <textarea
         
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add description"
        ></textarea>
      </div>

      <Button title="Add Item"/>
    </form>
</div>
  );
}

export default AddResource;
