import React, { useEffect, useState } from 'react'
import axios from "axios"

function GetClientName({ id }) {
    const [name, setName] = useState("");

    useEffect(() => {
      if (name.length == 0) {
        handleGetClient(id).then((res) => {
          setName(res.name);
        //   console.log(res.name);
        });
      }
    }, []);
    return <p>{name}</p>;
  }

  const handleGetClient = async (id) => {
    return await axios
      .get(`https://hellobonsaibackend.herokuapp.com/clients/c/${id}`)
      .then((res) => res.data);
  };
export default GetClientName