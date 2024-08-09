import frontimg from '../assets/images/frontimg.jpg'

const FrontPage = () => {
  return (
    <div className="h-screen  p-6   bg-[#F9E0DB] flex flex-col justify-center items-center">
      <div className="text-3xl md:text-5xl  ">
        <span className="tracking-wider font-serif font-bold border border-black block md:inline">
          BUILDING BRAND
        </span>{" "}
        <br className="hidden md:block" />
        <span className="tracking-wider font-serif font-bold border border-black block md:inline">
          REPUTATIONS
        </span>{" "}
        with <br className="hidden md:block" />
        <span className="tracking-wider font-serif font-bold border  md:inline">
          TARGETED
        </span>{" "}
        and{" "}
        <span className="tracking-wider font-serif font-bold border border-black bg-[#adfac8] block md:inline">
          IMPACTFUL
        </span>{" "}
        <br className="hidden md:block" />
        <span className="tracking-wider font-serif font-bold border border-black block md:inline">
          MEDIA COMMUNICATIONS.
        </span>
      </div>

      <div className="mt-6 md:mt-9 cursor-pointer">
        <span className="px-6 py-3 md:px-10 md:py-4 border bg-[#adfac8] border-black">
          What I do
        </span>
      </div>
      <img className='w-72 mt-8' src={frontimg} alt="" />
    </div>
  );
};

export default FrontPage;
