import { useState } from 'react';
import Logo from '../assets/logo-text.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="my-4 md:my-6 sticky top-0 z-100 py-4 bg-white">
            <div className="flex justify-between items-center container mx-auto px-4">
                <img className='w-28 md:w-40' src={Logo} alt="Logo" />

                {/* Desktop links */}
                <ul className='hidden lg:flex gap-6 items-center text-bolder text-gray-500'>
                    <li className='text-pink-700'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Desktop buttons */}
                <div className='hidden lg:flex gap-4'>
                    <button>Sign In</button>
                    <button className='btn bg-pink-500 text-white rounded-full px-4'>Sign Up</button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="lg:hidden text-2xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="lg:hidden container mx-auto px-4 mt-4 flex flex-col gap-4 text-gray-500">
                    <ul className='flex flex-col gap-4'>
                        <li className='text-pink-700'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex flex-col gap-3 mt-2'>
                        <button className="text-left">Sign In</button>
                        <button className='btn bg-pink-500 text-white rounded-full w-full'>Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;