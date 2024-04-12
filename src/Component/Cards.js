import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let apidata = props.Apidata;
  console.log("print data");
  console.log(apidata);
  let [likeCousre, setLike] = useState([]);
  let category = props.category;

  function getAllCourse() {
    let courseData = [];
    if (category === "All") {
      Object.values(apidata).forEach((alldata) => {
        if (Array.isArray(alldata)) {
          alldata.forEach((item) => {
            courseData.push(item);
          });
        } else {
          console.error("alldata is not an array");
        }
      });
      return courseData;
    } else {
      return apidata[category];
    }
  }

  let arraydata = getAllCourse();
  console.log(arraydata);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getAllCourse().map((course) => (
        <Card
          key={course.id}
          course={course}
          likeCousre={likeCousre}
          setLike={setLike}
        />
      ))}
    </div>
  );
};
export default Cards;
