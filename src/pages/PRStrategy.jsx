import pr from "../assets/images/pr.png";

const PRStrategy = () => {
  return (
    <div className="bg-[#F9E0DB] w-full h-screen p-16">
      <div >
        <span className="text-2xl border border-black p-1">PR Strategy</span>
      </div>
      <div className="mt-32 text-5xl">
        <h1 className="tracking-wider">
          <span className="border border-black">
            <span className="font-bold font-serif border border-black">
              ARE YOU A BUSINESS
            </span>{" "}
            <br />
            with a{" "}
            <span className="font-bold font-serif bg-[#adfac8]">
              STORY TO TELL
            </span>{" "}
            or a <br />{" "}
          </span>{" "}
          <span className="font-bold font-serif border border-black">
            PRODUCT TO LAUNCH?
          </span>
        </h1>
      </div>

      <div className="flex justify-center mt-20">
        <img className="w-96" src={pr} alt="" />
      </div>
    </div>
  );
};

export default PRStrategy;
