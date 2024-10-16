"use client";
import React, { useState } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CldImage,
} from "next-cloudinary";

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Image" />
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
        }}
        uploadPreset="zejoud6b"
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryUploadWidgetInfo;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
