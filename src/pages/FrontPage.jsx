import React from "react";

const FrontPage = () => {
  return (
    <div className="h-screen p-6 md:p-10 bg-[#F9E0DB]">
      <div className="text-3xl md:text-5xl mt-28">
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
    </div>
  );
};

export default FrontPage;
