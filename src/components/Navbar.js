import { useState } from 'react';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }
    return ( 
        <div className='flex justify-between items-center mx-auto h-24 px-[30px] max-w-[1240px] text-white '>
            <h1 className="w-full text-3xl font-bold">React.</h1>
            <div className="">
                <ul className="md:flex hidden">
                    <li className="p-4">Home</li>
                    <li className="p-4">Company</li>
                    <li className="p-4">Resources</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
               
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold m-4">React.</h1>
                <ul className='p-4 uppercase'>
                    <li className="p-4 border-b border-gray-600 ">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;