import Content from "./components/Content";
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import cancelBtn from "./assets/images/icon-menu-close.svg";
import { useState } from "react";

function App() {
  const [cancel, setCancel] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleCancel = () => {
    if (cancel) {
      setMobileMenu(false);
    } else {
      setMobileMenu(false);
      setCancel(false);
    }
  };

  return (
    <>
      <div
        className={`${
          mobileMenu ? " bg-[#b3b3b3]" : "bg-white"
        } flex justify-center items-center sm:bg-white mb-[100px] relative`}
      >
        {mobileMenu && (
          <div className="w-[70%] right-0 p-8 h-full block sm:hidden absolute bg-white">
            <div className=" mb-[100px] flex  justify-end ">
              <img
                src={cancelBtn}
                alt="close-icon"
                className="p-2 w-[60px] rounded-md hover:bg-[#ecebeb]"
                onClick={handleCancel}
              />
            </div>
            <ul className="text-[24px] gap-7 flex flex-col  ">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        )}
        <div className="sm:w-[80%] w-[90%]  ">
          <div className="flex justify-between items-center h-[120px] mt-6">
            <img src={logo} alt="logo" />
            <div>
              <ul className="sm:flex gap-5 text-dark_grayish_blue hidden">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
              </ul>
              <img
                src={menu}
                alt="menu"
                className="sm:hidden h-[40px] p-2 rounded-md hover:bg-[#ecebeb]"
                onClick={() => setMobileMenu(true)}
              />
            </div>
          </div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
