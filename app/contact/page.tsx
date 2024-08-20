import ContactUs from '@/components/ContactUs';
import Image from 'next/image';

const FullScreenImages = () => {
  return (
    <>
      <div className="relative h-[40vh] md:h-screen w-screen overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute bottom-5 left-5 text-white text-3xl md:text-6xl z-20">
          <p className='font-semibold'>CONTACT US</p>
          <div className='flex items-center gap-3 md:mt-4 ml-2'>
            <div className='w-5 md:w-20 h-[2px] bg-white'></div>
            <div className='text-xl md:text-4xl'>LET'S TALK</div>
            <div className='w-5 md:w-10 h-[2px] bg-white'></div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Image 1 */}
          <div className="relative col-span-1 md:col-span-1">
            <Image
              src="/assets/city1.png"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          {/* Image 2 */}
          <div className="relative col-span-1 md:col-span-1 hidden md:block">
            <Image
              src="/assets/city1.png"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          {/* Image 3 */}
          <div className="relative col-span-1 md:col-span-1 hidden md:block">
            <Image
              src="/assets/city1.png"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default FullScreenImages;
