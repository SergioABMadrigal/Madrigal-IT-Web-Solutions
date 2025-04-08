import Error_404_img from '../assets/Error_404.webp'

const Error404 = () => {
return (
    <div className="relative text-center mt-20">
        <img src={Error_404_img} alt="404 Error" className="w-200px h-200px object-contain mx-auto" loading='lazy' />
        <p className="text-black mt-4 text-xl font-bold">Oops! Page does not exist!</p>
    </div>
)
}

export default Error404