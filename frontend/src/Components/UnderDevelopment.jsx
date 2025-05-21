
const UnderDevelopment = () => {
  return (
    <div className='flex flex-col items-center py-3 bg-red-100'>
      <h2 className='text-2xl font-bold'>Demo Page</h2>
      <p className='text-gray-600 text-center'>
      We are working hard to bring {window.innerWidth < 768 ? <br /> : ' '}more features to the page each week!
      </p>
      <p className='text-gray-600 text-center'>
      Come back each week for {window.innerWidth < 768 ? <br /> : ' '}more features and demonstrations!
      </p>
    </div>
  )
}

export default UnderDevelopment