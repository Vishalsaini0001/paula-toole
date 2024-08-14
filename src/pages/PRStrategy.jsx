import pr from "../assets/images/pr.png";

const PRStrategy = () => {
  return (
    <div className="bg-[#F9E0DB] w-full h-auto p-8 md:p-16">
      <div className="mb-10">
      <span className="text-xl md:text-2xl lg:text-3xl border border-black p-1">
          PR Strategy
        </span>
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl">
        <h1 className="tracking-wider">
          <span className="border border-black p-1">
            <span className="font-bold font-serif border border-black p-1">
              ARE YOU A BUSINESS
            </span>{" "}
            <br />
            with a{" "}
            <span className="font-bold font-serif bg-[#adfac8] p-1">
              STORY TO TELL
            </span>{" "}
            or a <br />{" "}
          </span>{" "}
          <span className="font-bold font-serif border border-black p-1">
            PRODUCT TO LAUNCH?
          </span>
        </h1>
      </div>

      <div className="flex justify-center mt-8">
        <img className="w-full max-w-xs md:max-w-sm lg:max-w-md" src={pr} alt="PR strategy illustration" />
      </div>
    </div>
  );
};

export default PRStrategy;
