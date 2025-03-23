import React from 'react'

const ProductCard = ({ product }) => {
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='p-4 max-w-2xs border border-blue-800 rounded-lg bg-gradient-to-b from-blue-50 to-white'>
      <h1 className='font-bold text-center mb-1 text-sm'>{product.name}</h1>
      <p className='font-semibold text-xs'><span className='text-blue-600'>Date: </span>{formatDate(product.date)}</p>
      <p className='font-semibold text-xs'><span className='text-blue-600 font-normal'>Location: </span>{product.location}</p>
      <p className='text-xs'><span className='text-blue-600'>Category: </span>{product.category}</p>
      <hr className='my-4 border-t border-blue-800' />
      <p className='text-xs text-center'>{product.description}</p>
    </div>
  )
}

export default ProductCard