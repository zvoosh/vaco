import { useNavigate } from "react-router";
import "../styles/header.scss";
import { useContext, useState } from "react";
import { MyContext } from "../services";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ctx = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="w-100 bg-black text-gray flex flex-column justify-center align-center header-font">
      <div
        className={`bg-gray text-white-gray w-100 text-center animated-element ${
          isOpen ? "expanded" : ""
        }`}
      >
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/contact");
          }}
        >
          About
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/clients");
          }}
        >
          Clients
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/video");
          }}
        >
          Video
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/photo");
          }}
        >
          Photo
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/airial");
          }}
        >
          Airial
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/behind-the-sceens");
          }}
        >
          Behind the sceens
        </div>
        <div
          className="p-05 font-12"
          onClick={() => {
            navigate("/gear");
          }}
        >
          Gear
        </div>
      </div>
      <div
        className="w-100 text-center uppercase font-12 mt-1 text-white-gray menu-btn"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        MENU
      </div>
      <div className="header-container">
        <div className="header-left"></div>
        <div className="header-center">VACO</div>
        <div className="header-right">
          {ctx?.value && (
            <div
              onClick={() => {
                ctx?.setValue(false);
                ctx?.setIndex(undefined);
              }}
              className="remove-btn"
            >
              x
            </div>
          )}
        </div>
      </div>

      {!ctx?.value && (
        <div className="flex flex-row justify-between links-container">
          <div
            className="pointer user-none"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="pointer user-none"
            onClick={() => {
              navigate("/contact");
            }}
          >
            About
          </div>
          <div
            className="pointer user-none"
            onClick={() => {
              navigate("/clients");
            }}
          >
            Clients
          </div>
          <div
            onClick={() => {
              navigate("/video");
            }}
            className="pointer user-none"
          >
            <div>Video</div>
          </div>
          <div
            onClick={() => {
              navigate("/photo");
            }}
            className="pointer user-none"
          >
            <div>Photo</div>
          </div>
          <div
            className="pointer user-none"
            onClick={() => {
              navigate("/airial");
            }}
          >
            Airial
          </div>
          <div
            className="pointer user-none"
            onClick={() => {
              navigate("/behind-the-sceens");
            }}
          >
            Behind the Sceens
          </div>
          <div
            className="pointer user-none"
            onClick={() => {
              navigate("/gear");
            }}
          >
            Gear
          </div>
        </div>
      )}
    </div>
  );
};

export { Header };
