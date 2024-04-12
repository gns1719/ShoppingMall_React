import { useEffect, useState } from "react";
import Product from "../component/Product";
import TitleBar from "../component/TitleBar";
import { useParams } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET =  process.env.REACT_APP_CLIENT_SECRET

export default function SearchResult() {
    const {product} = useParams();
    const [loading,setLoading] = useState(true);
    const [res, setRes] = useState();
    const URL = `/v1/search/shop.json?query=${encodeURIComponent(product)}`

    useEffect(() => {
    fetch(URL, {
        method: "GET",
        headers: {
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET
        }
    }).then(res => res.json())
    .then(res => {setRes(res.items); setLoading(false)})
    }, []);

    return(
        <div>
      {loading ? (<h1>Loading...</h1>) : (
        <div>
          <TitleBar/>
          {res.map((res) => (
            <Product
              key={res.productId}
              id={res.productId}
              coverImg={res.image}
              title={res.title}
              price={res.lprice}
              maker={res.maker}
             />
          ))}
        </div>
      )}
    </div>
    );
  }