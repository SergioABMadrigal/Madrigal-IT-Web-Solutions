import React from 'react'
import ProductCard from '../Components/productCard'
import { useProductStore } from '../store/productFrontend'
import { useEffect } from 'react'


const Classes = () => {

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
console.log("products", products); //should display in an array in the console

  return (
    <div className='flex flex-col items-center justify-center px-20 py-15'>

      <h1 className='text-center text-3xl font-bold pb-5 mt-5'>
        All Upcoming Classes</h1>

      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product._id} product={product} /> //displays the product cards in a grid
        ))}
      </div>
      
      <hr className='my-5 mx-5' />
      <p className='text-center pt-10 text-3xl text-blue-600'>PLEASE CONTACT US FOR SPACE AVAILABILITY</p>

      <hr className='my-5 mx-5'/>
    </div>
  )
}

export default Classes