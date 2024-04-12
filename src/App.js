import React, { useState, useEffect } from "react";
import Nav from "./Component/Nav";
import { filterData, apiUrl } from "./data";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import Spinner from "./Component/Spinner";

function App() {
  const [Apidata, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Nav />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (
          <Spinner />
        ) : (
          <Cards Apidata={Apidata} category={category} />
        )}
      </div>
    </div>
  );
}

export default App;
