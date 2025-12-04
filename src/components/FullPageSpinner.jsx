// FullPageSpinner.tsx
import React from "react";
import { Spinner } from "@/components/ui/spinner";

const FullPageSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Spinner className="w-16 h-16 text-green-500" />
    </div>
  );
};

export default FullPageSpinner;
