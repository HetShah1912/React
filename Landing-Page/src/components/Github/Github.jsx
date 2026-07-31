import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/HetShah1912")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center flex items-center justify-evenly m-4 bg-gray-600 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="Github Profile" className="w-50"/>
      Github Followers :{data.followers}
    </div>
  );
}

export default Github;
