import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
  // Access products from context
  const { products } = useContext(ShopContext);
  
  // State for best sellers
  const [bestSellers, setBestSellers] = useState([]);

  // Filter products to get best sellers and limit to 5
  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSellers(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        {/* Ensure BEST and SELLERS are defined as strings */}
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Historically, surnames evolved as a way to sort people into groups - by occupation,
          place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics.
        </p>
      </div>

      {/* Render the list of best seller products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSellers.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }

      </div>
     
      </div>
    
  );
}

export default BestSeller;
