type CloseButtonProps = {
  onClick: () => void;
};
function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-5 right-4 p-1 rounded-full bg-red-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none sm:hidden"
      aria-label="Close sidebar"
    >
      <svg
        className="w-6 h-6 text-gray-600 dark:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default CloseButton;
