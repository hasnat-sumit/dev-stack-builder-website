import { use } from 'react';
import type { Technology } from '../Types/technologyType';
import ExploreTechnologies from './ExploreTechnologies';


interface TechnologyProps {
    technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologyProps) => {
    const technologies = use(technologiesPromise)
    
    return (
        <div className='container mx-auto'>
            <div className='mb-6'>
                <h2 className="font-bold text-[45px]">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-pink-700 to-violet-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>               
                 <p className='text-gray-500 text-xl mb-10'>Pick one technology per category to build your ideal stack</p>
            </div>

            <ExploreTechnologies technologies={technologies} />
        </div>
    );
};

export default Technologies;