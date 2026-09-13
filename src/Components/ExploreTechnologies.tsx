// import { useState } from 'react';
// import type { Technology } from '../Types/technologyType';
// import { FaStar, FaTimes } from 'react-icons/fa';

// const tagColorMap: Record<string, string> = {
//     Popular: 'bg-blue-100 text-blue-700 border border-blue-200',
//     Versatile: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
//     Fast: 'bg-red-100 text-red-700 border border-red-200',
//     Standard: 'bg-green-100 text-green-700 border border-green-200',
//     'Top SQL': 'bg-sky-100 text-sky-700 border border-sky-200',
//     Cache: 'bg-rose-100 text-rose-700 border border-rose-200',
//     Ubiquitous: 'bg-amber-100 text-amber-700 border border-amber-200',
//     Essential: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
//     Robust: 'bg-orange-100 text-orange-700 border border-orange-200',
//     Modern: 'bg-cyan-100 text-cyan-700 border border-cyan-200',
//     Containers: 'bg-blue-100 text-blue-700 border border-blue-200',
// };

// const defaultTagColor = '';

// const ExploreTechnologies = ({ technologies }: { technologies: Technology[] }) => {

//     const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

//     const isSelected = (technology: Technology) =>
//         selectedStack.some((t) => t.name === technology.name);

//     const toggleStack = (technology: Technology) => {
//         setSelectedStack((prev) =>
//             isSelected(technology)
//                 ? prev.filter((t) => t.name !== technology.name)
//                 : [...prev, technology]
//         );
//     };

//     const removeFromStack = (technology: Technology) => {
//         setSelectedStack((prev) => prev.filter((t) => t.name !== technology.name));
//     };

//     return (
//         <div className='flex justify-between gap-4'>
//             <div className="grid grid-cols-3 gap-4">
//                 {technologies.map((technology: Technology) => {
//                     const selected = isSelected(technology);
//                     return (
//                         <div
//                             key={technology.name}
//                             className={`card bg-base-100 w-full shadow-sm border border-gray-200 transition-all ${selected
//                                     ? 'bg-green-50 border-2 border-green-400'
//                                     : 'bg-base-100 border border-transparent'
//                                 }`}
//                         >
//                             <div className='flex justify-between mx-3  mt-4'>
//                                 <figure className='w-10'>
//                                     <img src={technology.logo} alt="Logo" />
//                                 </figure>
//                                 <h4 className={`rounded-full px-4 py-2 text-sm font-sm ${tagColorMap[technology.tag] ?? defaultTagColor}`}>
//                                     {technology.tag}
//                                 </h4>
//                             </div>

//                             <div className="card-body">
//                                 <h2 className="card-title text-lg font-bold">{technology.name}</h2>
//                                 <p className='card-description text-[12px] text-gray-500'>{technology.description}</p>
//                             </div>

//                             <div className='flex justify-between items-center mx-3 my-2 text-[12px]'>
//                                 <h4 className='bg-base-200 rounded-xl px-3 py-1 inline-block'>{technology.category}</h4>
//                                 <h4 className='text-gray-500'>{technology.level}</h4>
//                                 <h4 className='flex justify-between gap-1 items-center'>
//                                     <FaStar className="text-yellow-400" /> {technology.rating}
//                                 </h4>
//                             </div>

//                             <div className="mx-3 mb-4">
//                                 <button
//                                     onClick={() => toggleStack(technology)}
//                                     className={`btn w-full rounded-xl transition-colors ${selected
//                                             ? 'bg-green-500 text-white hover:bg-green-600'
//                                             : 'bg-black text-white hover:bg-gray-800'
//                                         }`}
//                                 >
//                                     {selected ? 'Added to Stack' : 'Add to Stack'}
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             <div className="w-72 shrink-0">
//                 <div className="card bg-base-100 shadow-sm border border-gray-200">
//                     <div className="card-body">
//                         <h2 className='font-bold text-xl'>Your Stack</h2>
//                         <p className="text-sm text-gray-500 mt-2">
//                             {selectedStack.length === 0
//                                 ? 'No technologies selected yet'
//                                 : `${selectedStack.length} ${selectedStack.length === 1 ? 'technology' : 'technologies'} selected`}
//                         </p>

//                         {selectedStack.length === 0 ? (
//                             <p className="text-gray-400 text-sm mt-2 border rounded-full px-5 py-3">Your Stack is empty</p>
//                         ) : (
//                             <div className="flex flex-col gap-2 mt-2">
//                                 {selectedStack.map((technology) => (
//                                     <div
//                                         key={technology.name}
//                                         className="flex items-center justify-between bg-base-200 rounded-xl px-3 py-2"
//                                     >
//                                         <div className="flex items-center gap-2">
//                                             <img src={technology.logo} alt="Logo" className="w-5 h-5" />
//                                             <span className="text-sm font-medium">{technology.name}</span>
//                                         </div>
//                                         <button
//                                             onClick={() => removeFromStack(technology)}
//                                             className="text-gray-400 hover:text-red-500 transition-colors"
//                                         >
//                                             <FaTimes size={12} />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExploreTechnologies;

import { useState } from 'react';
import type { Technology } from '../Types/technologyType';
import { FaStar, FaTimes } from 'react-icons/fa';

const tagColorMap: Record<string, string> = {
  Popular: 'bg-blue-100 text-blue-700 border border-blue-200',
  Versatile: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  Fast: 'bg-red-100 text-red-700 border border-red-200',
  Standard: 'bg-green-100 text-green-700 border border-green-200',
  'Top SQL': 'bg-sky-100 text-sky-700 border border-sky-200',
  Cache: 'bg-rose-100 text-rose-700 border border-rose-200',
  Ubiquitous: 'bg-amber-100 text-amber-700 border border-amber-200',
  Essential: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
  Robust: 'bg-orange-100 text-orange-700 border border-orange-200',
  Modern: 'bg-cyan-100 text-cyan-700 border border-cyan-200',
  Containers: 'bg-blue-100 text-blue-700 border border-blue-200',
};

const defaultTagColor = '';

const ExploreTechnologies = ({ technologies }: { technologies: Technology[] }) => {

    const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

    const isSelected = (technology: Technology) =>
        selectedStack.some((t) => t.name === technology.name);

    const toggleStack = (technology: Technology) => {
        setSelectedStack((prev) =>
            isSelected(technology)
                ? prev.filter((t) => t.name !== technology.name)
                : [...prev, technology]
        );
    };

    const removeFromStack = (technology: Technology) => {
        setSelectedStack((prev) => prev.filter((t) => t.name !== technology.name));
    };

    return (
        <div className='flex flex-col lg:flex-row justify-between gap-4 px-4 lg:px-0'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {technologies.map((technology: Technology) => {
                    const selected = isSelected(technology);
                    return (
                        <div
                            key={technology.name}
                            className={`card bg-base-100 w-full shadow-sm border border-gray-200 transition-all ${
                                selected
                                    ? 'bg-green-50 border-2 border-green-400'
                                    : 'bg-base-100 border border-transparent'
                            }`}
                        >
                            <div className='flex justify-between mx-3 mt-4'>
                                <figure className='w-10'>
                                    <img src={technology.logo} alt="Logo" />
                                </figure>
                                <h4 className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-sm ${tagColorMap[technology.tag] ?? defaultTagColor}`}>
                                    {technology.tag}
                                </h4>
                            </div>

                            <div className="card-body">
                                <h2 className="card-title text-base sm:text-lg font-bold">{technology.name}</h2>
                                <p className='card-description text-[12px] text-gray-500'>{technology.description}</p>
                            </div>

                            <div className='flex flex-wrap justify-between items-center gap-2 mx-3 my-2 text-[12px]'>
                                <h4 className='bg-base-200 rounded-xl px-3 py-1 inline-block'>{technology.category}</h4>
                                <h4 className='text-gray-500'>{technology.level}</h4>
                                <h4 className='flex justify-between gap-1 items-center'>
                                    <FaStar className="text-yellow-400" /> {technology.rating}
                                </h4>
                            </div>

                            <div className="mx-3 mb-4">
                                <button
                                    onClick={() => toggleStack(technology)}
                                    className={`btn w-full rounded-xl transition-colors ${
                                        selected
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-black text-white hover:bg-gray-800'
                                    }`}
                                >
                                    {selected ? 'Added to Stack' : 'Add to Stack'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="w-full lg:w-72 shrink-0">
                <div className="card bg-base-100 shadow-sm border border-gray-200 lg:sticky lg:top-24">
                    <div className="card-body">
                        <h2 className='font-bold text-xl'>Your Stack</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            {selectedStack.length === 0
                                ? 'No technologies selected yet'
                                : `${selectedStack.length} ${selectedStack.length === 1 ? 'technology' : 'technologies'} selected`}
                        </p>

                        {selectedStack.length === 0 ? (
                            <p className="text-gray-400 text-sm mt-2 border rounded-full px-5 py-3 text-center">Your Stack is empty</p>
                        ) : (
                            <div className="flex flex-col gap-2 mt-2">
                                {selectedStack.map((technology) => (
                                    <div
                                        key={technology.name}
                                        className="flex items-center justify-between bg-base-200 rounded-xl px-3 py-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src={technology.logo} alt="Logo" className="w-5 h-5" />
                                            <span className="text-sm font-medium">{technology.name}</span>
                                        </div>
                                        <button
                                            onClick={() => removeFromStack(technology)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <FaTimes size={12} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreTechnologies;