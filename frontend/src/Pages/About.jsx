
import SocialMedia from '../Components/SocialMedia'

const About = () => {
  return (
    <div className='flex flex-col items-center  px-5 py-10 w-full'>
      <div className='w-full max-w-5xl'>
      <h1 className='text-center text-3xl'>About Us</h1>
      <div className='text-center container mx-auto py-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum libero veritatis, voluptatum doloribus illo ut aperiam, in suscipit corrupti quisquam culpa adipisci. Quos, voluptatibus et incidunt delectus quisquam nihil!
      </div>
      <SocialMedia />
      <p className='text-center text-2xl text-blue-700 mt-5'>Follow us on social media!</p>
      </div>
    </div>
  )
}

export default About