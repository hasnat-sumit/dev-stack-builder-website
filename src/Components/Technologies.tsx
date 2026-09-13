import { use } from 'react';
import type { Technology } from '../Types/technologyType';
import ExploreTechnologies from './ExploreTechnologies';

interface TechnologyProps {
    technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologyProps) => {
    const technologies = use(technologiesPromise)

    return (
        <div className='container mx-auto px-4'>
            <div className='mb-6 text-center md:text-left'>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px]">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-pink-700 to-violet-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className='text-gray-500 text-base sm:text-lg md:text-xl mb-6 md:mb-10'>
                    Pick one technology per category to build your ideal stack
                </p>
            </div>

            <ExploreTechnologies technologies={technologies} />
        </div>
    );
};

export default Technologies;