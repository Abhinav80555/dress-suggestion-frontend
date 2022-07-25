import React, { useEffect, useState } from "react";
import { API } from "../pages/global";
import { useParams } from "react-router-dom";
import { EditDressForm } from "./EditDressForm";






export function EditDress() {

  const { id } = useParams();

  const [dress, setDress] = useState(null);
  useEffect(() => {
    fetch(`${API}/dress/${id}`)
      .then((data) => data.json())
      .then((dr) => setDress(dr));
  }, [id]);


  return (
    <div>
      {/* <pre>{JSON.stringify(dress, null, 2)}</pre>       */}
      {dress ? <EditDressForm dress={dress} /> : "Loading..."}
    </div>

  );
}



