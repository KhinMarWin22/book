import React, { useEffect, useState } from "react";
import useFetch from "./hook/useFetch";
import { GetBookData } from "./service/books.service";

import {Routes,Route} from "react-router-dom"
import { DetailBookPage, HomePage } from "./pages";
import { NavComponents } from "./components";
import NotFound from "./NotFound";



const App = () => {
   const {loading,data,error} = useFetch(GetBookData,"books");

  return (
    <div className=" ">
<NavComponents/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/detail/:id" element={<DetailBookPage/>}/>

  <Route path="*" element={<NotFound/>}/>

</Routes>

   {/* {loading ? <h1>Loading</h1> : <> {data ? <div>{JSON.stringify(data)}</div> : <h1>{error}</h1>}</>} */}
    </div>
  );
};

export default App;
