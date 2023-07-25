import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([{}]);
    useEffect(() => {
        axios
          .get("http://localhost:8080/product/"+id)
          .then((res) => {
            console.log(res.data.data);
            setData(res.data.data[0]);
          })
          .catch((error) => {
            toast.error("No Data found !", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          });
      }, []);
  return (
    <div>
         <div>ProductDetails - {id}</div>
        
    </div>
   
    
  )
}

export default ProductDetails