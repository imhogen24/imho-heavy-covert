"use client";
import { UploadButton } from "../../../lib/uploadthing";

const UploadPage = () => {
  return (
    <div className="flex justify-center items-center">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default UploadPage;
