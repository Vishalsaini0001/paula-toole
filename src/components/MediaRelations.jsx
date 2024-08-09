import React from "react";
import Mr from "../assets/images/mr.png";
const MediaRelations = () => {
  return (
    <>
      {/* media relations content  */}
      {/* main container */}
      <div className="bg-[#C7FFDE]">
        <div className="px-10 flex flex-col gap-14 py-10">
          <div>
            <h1 className="text-2xl">Media Relations</h1>
          </div>
          <div className="text-5xl font-medium">
            <h1>
              Media Relations{" "}
              <span className="text-5xl font-light">can support your</span>{" "}
              MARKETING OBJECTIVES <span className="font-light">and</span> HELP
              TO BUILD YOUR BRAND{" "}
            </h1>
          </div>
          <div className="w-full m-auto flex justify-center">
            <img src={Mr} alt="media relations"/>
          </div>
        </div> 

        <div className="flex md:px-10 text-lg">
          <div className="">
            <p className=" px-10 md:px-0 md:max-w-[80%] pb-10 md:pb-0">
              Media relations can support your marketing objectives and help to
              build your brand profile and reputation with targeted and relevant
              media communications. If you have lots to say but don’t know how
              to say it - or maybe you know exactly what you want to say but
              need expert guidance on how to ‘get it out there’, then I’ve got
              you covered!
            </p>
          </div>
          <div className="hidden mb-5 md:block">
            <p className="ml-[-80px]">
              I will help you to identify those great news stories and package
              them correctly to appeal to the media, ensuring that you get your
              share of voice, and your brand messages have the exposure and
              impact you want them to.<br/><br />
              <p>Services include but are not limited to:</p><br />
              - News creation and ideation <br />
              - Press release writing <br />
              - Feature writing <br />
              - Media outreach <br />
              - Press office support <br />
              - Issues and crisis management 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaRelations;
