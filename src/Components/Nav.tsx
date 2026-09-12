import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="my-6 sticky top-0 z-100 py-4 bg-white" >
            <div className="flex justify-between container mx-auto">
                <img className='w-40' src={Logo} alt="" />

                <ul className='flex gap-6 items-center text-bolder text-gray-500 '>
                    <li className='text-pink-700'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className='flex gap-4'>
                    <button className=''>Sign In</button>
                    <button className='btn bg-pink-500 text-white rounded-full'>Sign Up</button>
                </div>

            </div>

        </nav>
    );
};

export default Nav;