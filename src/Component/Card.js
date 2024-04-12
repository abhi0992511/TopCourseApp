import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
  let courses = props.course;
  let likeCousre = props.likeCousre;
  let setLike = props.setLike;
  let courseId = props.course.id;

  function likeHnadler() {
    if (likeCousre.includes(courseId)) {
      setLike((prev) => prev.filter((cid) => cid !== courseId));
      toast.warning("Like remove");
    } else {
      if (likeCousre.length === 0) {
        {
          setLike([courseId]);
        }
      } else {
        setLike((prev) => [...prev, courseId]);
      }
      toast.success("Like sucessfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={courses.image.url} alt={courses.image.alt}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
          <button onClick={likeHnadler}>
            {likeCousre.includes(courseId) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <p className="text-white font-semibold text-lg leading-6 px-2">
        {courses.title}
      </p>
      <p className="mt-2 text-white px-2">
        {" "}
        {courses.description.length > 100
          ? courses.description.substr(0, 100) + "..."
          : courses.description}
      </p>
    </div>
  );
};
export default Card;
