import React, { useState,useEffect } from 'react';
import { GetBookData } from "../service/books.service";

const useFetch = (funFetch,arg) => {

    const [data, setData] = useState({
        loading: true,
        data: null,
        error: null,
      });
      useEffect(() => {
        (async () => {
          try {
            const data = await funFetch(arg);
    
            setData((pre) => {
              return { loading: false, data: data, error: null };
            });
          } catch (e) {
            setData((pre) => {
              return { loading: false, data: null, error: e.message };
            });
          }
        })();
      }, []);
  return data;
}

export default useFetch