import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Error = () => {
  toast.error("Error");

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Error
      </div>
    </div>
  );
};

export default Error;
