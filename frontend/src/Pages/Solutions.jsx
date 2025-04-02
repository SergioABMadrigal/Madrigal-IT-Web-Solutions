
import FloatingShape from '../Components/FloatingShape.jsx';

const Solution = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-4 py-20">
      <FloatingShape/>
      <FloatingShape color="bg-[#3f4d55]" size="w-32 h-32" top="5%" left="20%" delay={0} />
      <FloatingShape color="bg-[#1f1e26]" size="w-48 h-48" top="30%" left="50%" delay={2} />
      <FloatingShape color="bg-[#3f4d55]" size="w-64 h-64" top="50%" left="80%" delay={4} />
      <div className="flex flex-col gap-4 w-1/2 text-center">
      <h1 className="text-2xl font-bold">We offer a number of tiers to meet your website needs.</h1>
      <p>Why Choose Us?</p>
      </div>
      <div className="flex flex-col gap-4 w-2/3 items-center">
      <ul className="list-disc list-inside text-left w-3/4">
        <li>Professional Websites bring in and hold customers.</li>
        <li>We manage the website in a Virtual Private Network. The server is fully under our control.</li>
        <li>Security updates and patches are included.</li>
        <li>Search Engine Optimization is conducted INSIDE the code to ensure fast loading times and Search Engine compatibility</li>
        <li>We use our own templates, with higher customization than DIY paid sites.</li>
        <li>Real Domains used. We search, buy, and connect the domain name for you. The Domain name is YOURS to transfer if needed.</li>
        <li>Our websites are optimized for mobile use at no extra cost.</li>
        <li>We implement SSL certificates at no extra cost.</li>
        <li>Continuous research from us means more affordable features to come.</li>
      </ul>
      <p className="text-center">Our development and hosting structure reduces costs per website. Savings are passed to YOU.</p>
      </div>
    </div>
    )
}

export default Solution