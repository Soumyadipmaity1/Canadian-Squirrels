"use client";
import Image from 'next/image';
import { AnimatedListDemo } from './AnimatedList';

interface Poster {
  image: string;
}

interface ListItem {
  icon: string;
  data: string;
  detail: string;
}

interface DentalCareProps {
  Posters: Poster[];
  ListItems: ListItem[];
  Title: string;
}

const DentalCare: React.FC<DentalCareProps> = ({
  Posters,
  ListItems,
  Title,
}) => {

  const location = (Title === 'ALL SMILES DENTAL CARE' || Title === 'BOW RIVER DENTAL') 
    ? 'NW Calgary, AB' 
    : 'NE Calgary, AB';

  return (
    <div className="p-7 flex flex-col gap-4 md:gap-10 dark:bg-[#0E0E0E] bg-[#DAD9FF]">
      <h1 className="text-center bg-[#C1B6FD] text-[#522987] font-semibold text-sm md:text-3xl py-2 px-4 md:px-10 rounded-sm w-fit mx-auto">
        {Title}
      </h1>

      {/* Location Section */}
      <div className="text-center justify-center dark:text-white text-black space-x-4 flex font-normal text-sm sm:text-base lg:text-lg items-center">
        <Image src="/logo/Vector.png" alt="location-icon" width={30} height={30} className='w-4 md:w-8' />
        <p>{location}</p>
      </div>

      <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
        <div className="w-full md:w-[50%] xl:w-[70%] flex flex-col justify-center items-center">
          <Image
            src={Posters[0].image}
            alt="main-poster"
            width={800}
            height={400}
            className=""
          />
        </div>
        <AnimatedListDemo listItems={ListItems} />
      </div>

      {(Title === 'ALL SMILES DENTAL CARE' || Title === 'BOW RIVER DENTAL') && (
        <div>
          <div className="text-[#5E49C8] dark:text-[#7B61FF] text-2xl md:text-4xl font-medium max-w-[700px] text-center mb-4 md:mb-10 mx-auto">
            We <span className="text-[#3A2896] dark:text-white font-bold">Achieved </span>All
            This Within <span className="text-[#3A2896] dark:text-white font-bold">15 DAYS </span> 
            Of Their <span className="text-[#3A2896] dark:text-white font-bold">Marketing Campaign</span>
          </div>

          <div className="flex md:flex-row flex-col gap-10 mb-10">
            <div className="w-full md:w-[70%] flex justify-center items-center">
              <Image
                src={Posters[1].image}
                alt="campaign-poster-1"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-valuesContainerShadow"
              />
            </div>
            <div className="w-full md:w-[30%] flex justify-center items-center">
              <Image
                src={Posters[2].image}
                alt="campaign-poster-2"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-valuesContainerShadow"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-10">
            <div className="w-full md:w-[30%] flex justify-center items-center">
              <Image
                src={Posters[3].image}
                alt="campaign-poster-3"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-valuesContainerShadow"
              />
            </div>
            <div className="w-full md:w-[70%] flex justify-center items-center">
              <Image
                src={Posters[4].image}
                alt="campaign-poster-4"
                width={800}
                height={400}
                className="w-full h-full object-cover rounded-2xl shadow-valuesContainerShadow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DentalCare;
