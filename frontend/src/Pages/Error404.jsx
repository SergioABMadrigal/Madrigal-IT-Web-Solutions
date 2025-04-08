import error_404_jpeg from '../assets/Error_404.jpeg'

const Error404 = () => {
return (
    <div className="relative text-center mt-20">
        <img src={error_404_jpeg} alt="404 Error" className="w-200px h-200px object-contain mx-auto" loading='lazy' />
        <p className="text-black mt-4 text-xl font-bold">Oops! Page does not exist!</p>
    </div>
)
}

export default Error404