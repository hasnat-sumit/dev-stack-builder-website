import bannerLogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row my-6 container mx-auto items-center gap-10 mt-10 lg:mt-20 mb-10 lg:mb-20 px-4">
            <div className='mb-6 text-center lg:text-left'>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Build Your Ideal</h2>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 bg-linear-to-r from-orange-500 via-pink-700 to-violet-600 bg-clip-text text-transparent'>
                    Development Stack
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-500">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 my-6 mt-8 lg:mt-15 justify-center lg:justify-start">
                    <button className="btn bg-linear-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg">
                        Explore Technologies
                    </button>
                    <button className="btn rounded-lg text-gray-500">Learn More</button>
                </div>
            </div>

            <div className="w-full lg:w-auto">
                <img className='w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:w-4xl mx-auto' src={bannerLogo} alt="Stack illustration" />
            </div>
        </section>
    );
};

export default Banner;