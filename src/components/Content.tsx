import mainImg from "../assets/images/image-web-3-desktop.jpg";
import phoneImage from "../assets/images/image-web-3-mobile.jpg";
import gamePad from "../assets/images/image-gaming-growth.jpg";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";

const Content = () => {
  const data = [
    // {
    //   title: "  Hydrogen VS Electric Cars",
    //   description: " Will hydrogen-fueled cars ever catch up to EVs?",
    // },
    {
      title: "  The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "  Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  const bottomData = [
    {
      image: retro,
      id: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: laptop,
      id: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
    },
    {
      image: gamePad,
      id: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <div className="sm:grid sm:grid-cols-3 sm:grid-rows-[1.8fr_1fr_0.6fr] flex flex-col gap-7">
      <div className="col-span-2 ">
        <img
          src={mainImg}
          alt="main-image"
          className="h-[100%] sm:block hidden"
        />
        <img src={phoneImage} alt="mobile" className="sm:hidden block" />
      </div>
      <div className="sm:row-span-2 sm:order-none order-4 bg-very_dark_blue p-5">
        <h1 className="text-soft_orange text-4xl font-bold pl-4"> New</h1>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className=" sm:flex sm:flex-col justify-center items-start p-4 gap-2"
            >
              <h2 className="text-[20px] font-bold hover:text-soft_orange cursor-pointer text-[#FDFEFD] leading-6 ">
                {item.title}
              </h2>
              <p className="text-[15px] text-[#B6B6CC] font-[500] mb-4">
                {item.description}
              </p>
              <div className="w-full bg-[#484862] h-[1px] "></div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-[54px] sm:order-3 order-3 text-[#03031B] leading-[55px] h-[100%] font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="flex flex-col sm:order-4 lg:order-3 justify-start">
        <p className="text-[#747176]">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-soft_red hover:bg-very_dark_blue hover:text-white cursor-pointer w-[170px] tracking-widest font-semibold p-4 mt-5 px-7">
          READ MORE
        </button>
      </div>
      {bottomData.map((item, index) => {
        return (
          <div key={index} className="sm:row-span-3 pt-7 order-last ">
            <div className="flex gap-5 max-h-[120px]">
              <img src={item.image} alt={item.title} className="w-[100px] " />
              <div>
                <p className="text-soft_red text-3xl font-bold">{item.id}</p>
                <h2 className="font-bold text-lg mt-1 hover:text-soft_red cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-[#484862] mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
