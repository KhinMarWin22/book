import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/books.service";
import { BooklistsComponents } from "../components";
import { Link } from "react-router-dom";
import LoadingComponents from "../Loading.components";

const HomePage = () => {
  const { data, error, loading } = useFetch(GetBookData, "books");
  return (
    <div className=" main ">
      {loading ? (
       <LoadingComponents/>
      ) : (
        <>
          <div className="    flex flex-wrap  gap-y-36 justify-between  ">
            {data.map((el) => (
          
                <BooklistsComponents key={el.id} data={el} />
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default HomePage;
