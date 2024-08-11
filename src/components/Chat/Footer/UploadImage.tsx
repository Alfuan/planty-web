import { toast } from "react-toastify";
import { useState, type ChangeEvent } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import getFileToBase64 from "../../../utils/fileToBase64";
function UploadImage() {
  const [loading, setLoading] = useState(false);

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (event.target.files?.[0]) {
      const response = await fetch("/api/predict", {
        method: "POST",
        body: JSON.stringify({
          image: await getFileToBase64(event.target.files[0]),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success((await response.json()).data as string);
      } else {
        toast.error(await response.text());
      }
    }
    setLoading(false);
  };

  return (
    <>
      <label htmlFor="file-upload">
        {!loading ? (
          <>
            <img src="/image.svg" alt="image" />
            <p>Cargar nueva imagen</p>
          </>
        ) : (
          <ClipLoader color={"#000"} loading={loading} size={30} />
        )}
      </label>
      <input onChange={onChange} id="file-upload" type="file" />
    </>
  );
}

export default UploadImage;
