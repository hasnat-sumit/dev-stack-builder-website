const Footer = () => {
    return (
        <footer>
            <div className='divider mt-20 mb-20' />
            <section className='flex justify-between container mx-auto mb-10 text-sm'>
                <div className=''>
                    <img className='w-30 mb-4' src="/src/assets/logo-text.png" alt="logo" />
                    <h4 className='mb-4 text-gray-500'>Curated tools, technologies, and resources for devolopers <br /> building modern tools</h4>
                    <ul className='flex gap-6'>
                        <li>Github</li>
                        <li>Twiter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>

                <div className='mb-4 text-gray-500'>
                    <ul>
                        <li className='font-bold mb-4 text-black'>PRODUCT</li>
                        <li className='mb-1.5'>Home</li>
                        <li className='mb-1.5'>Technologies</li>
                        <li className='mb-1.5'>Projects</li>

                    </ul>

                </div>

                <div>
                    <ul className='text-gray-500'>
                        <li className='font-bold text-black mb-4'>COMPANY</li>
                        <li className='mb-1.5'>About</li>
                        <li className='mb-1.5'>Contact</li>
                        <li className='mb-1.5'>Career</li>
                    </ul>
                </div>

                <div>
                    <ul className='text-gray-500'>
                        <li className='font-bold mb-4 text-black'>LEGAL</li>
                        <li className='mb-1.5'>Privacy Policy</li>
                        <li className='mb-1.5'>Terms of Service</li>
                    </ul>
                </div>
            </section>

            <div className='divider container mx-auto' />

            <section className='flex justify-between container mx-auto  mb-20 text-gray-500 text-[14px] '>
                <h4>2026 Dev Stack. All right reserved</h4>

                <div className='flex justify-between gap-6'>
                    <h4>Privacy</h4>
                    <h4>Terms</h4>
                </div>
            </section>


        </footer>



    );
};

export default Footer;