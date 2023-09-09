'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'


const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  console.log('products', products)

  const getProducts = async () => {
    try {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{              
              setProducts(json) 
              setLoading(false)
              console.log})                    
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  getProducts()

  return (
   <div className='flex justify-center px-24 my-11 gap-5 flex-wrap min-h-screen'>
  {loading ? (
    <div className='flex items-center justify-center h-screen w-full'>
      <Image
        className='h-[10vh] w-[fit-content]'
        width={50}
        height={50}
        alt='loading'
        src='/loading.gif'
      />
    </div>
  ) : (
    products.map((product) => (
      <div className='bg-white p-5 rounded-md flex flex-col w-[300px] cursor-pointer'>
        <p className='text-[13px]'>{product.category}</p>
        {/* Product Image */}
        <Image
          className='w-full h-[30vh] my-5'
          width={100}
          height={100}
          alt='images'
          src={product.image}
        />
        <h2 className='font-semibold text-lg'>{product.title}</h2>
        <p className='text-[#818181]'>{product.description}</p>
        <div className='flex justify-between items-end'>
          <p className='text-[#818181]'>${product.price}</p>
          {/* Add any additional elements here */}
        </div>
      </div>
    ))
  )}
</div>

  
  )
}

export default ProductList