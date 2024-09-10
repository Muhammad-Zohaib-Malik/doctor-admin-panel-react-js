import {
  CircleGauge,
  Copyright,
  Earth,
  MenuIcon,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [spacing, setSpacing] = useState(300);
  const location = useLocation();
  const menus = [
    {
      title: "Dashboard",
      icon: <CircleGauge />,
      link: "/dashboard",
    },
  ];
  const [avatar, setAvatar] = useState("/images/Eng.webp");
  const handleLanguageChange = (e) => {
    const language = e.target.value;
    let newAvatar;

    switch (language) {
      case "en":
        newAvatar = "/images/Eng.webp";
        break;

      case "fr":
        newAvatar = "/images/french.webp";
        break;

      case "cn":
        newAvatar = "/images/chinese.webp";
        break;
      default:
    }

    setAvatar(newAvatar);
  };

  return (
    <div className="bg-[#E9E7EF] min-h-screen">
      <aside
        className=" fixed top-0 left-0  h-full bg-white overflow-hidden"
        style={{ width: spacing, transition: "300ms" }}
      >
        <div className="p-5">
          <div
            className={`flex  items-center justify-center ${
              spacing === 300 ? "mb-0" : "mb-5"
            }`}
          >
            {spacing === 300 ? (
              <img className="w-24" src="/images/logo1.webp " alt="" />
            ) : null}

            {spacing === 77 ? (
              <img className="w-28" src="/images/logo.webp " alt="" />
            ) : null}
          </div>
          <div className="flex  items-center ">
            <img className="w-16" src="/images/avatar.webp" alt="" />
            {spacing === 300 && (
              <h1 className="text-xl font-semibold">Super Admin</h1>
            )}
          </div>
        </div>

        <div className="p-3 flex  flex-col gap-2">
          {menus.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex gap-3  px-4 py-2 rounded-md text-black overflow-hidden "
              style={{
                background: location.pathname === item.link ? "#08976E" : null,
                color: location.pathname === item.link ? "white" : null,
              }}
            >
              <span>{item.icon}</span>
              <span className="text-lg">{item.title}</span>
            </Link>
          ))}
        </div>
      </aside>

      <section style={{ marginLeft: spacing, transition: "300ms" }}>
        <nav className="bg-white p-6 shadow flex justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSpacing(spacing === 300 ? 77 : 300)}
              className=" w-12 h-12 rounded-full "
            >
              <MenuIcon />
            </button>
            <div className="flex gap-3">
              <Earth />
              <Link to>Go to Website</Link>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button className="flex  gap-1 ">
              <MessageSquare />
              <h1 className="text-sm">Health Ease</h1>
            </button>

            <button className="flex items-center">
              <img className="w-12" src="/images/avatar.webp" alt="" />
              <h1 className="text-sm">Chat with Us</h1>
            </button>

            <button className="flex items-center gap-2">
              <img className="w-12" src={avatar} alt="avatar" />
              <select
                className="text-sm outline-none"
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="cn">中文</option>
              </select>
            </button>
          </div>
        </nav>
        <div className="p-6">{children}</div>
        <footer className="bg-white p-6 rounded-md m-6 ">
          <div className="flex items-center  w-fit mx-auto text-gray-600">
            <Copyright />
            <p>Zohaibaay | All right reserved</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Layout;
