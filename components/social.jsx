import {
  FaTelegramPlane,
  FaFacebook,
  FaEthereum,
  FaMoneyBillWave,
} from "react-icons/fa";
import Link from "next/link";

const SocialButtons = () => {
  return (
    <div>
      <div className="button-holder">
        <Link href="/introduction">
          <a
            title="Introduction to Ethereum and Smart Contracts"
            className="buttons"
          >
            <FaEthereum />
          </a>
        </Link>
        <Link href="/voomo">
          <a
            title="Introduction to our very first Smart Contract - Voomo"
            className="buttons"
          >
            <FaMoneyBillWave />
          </a>
        </Link>
        <a
          href="https://t.me/joinchat/JfZZgholJ8nSMuYh1gPfWw"
          title="My Telegram Group to answer your questions"
          rel="noopener noreferrer"
          target="_blank"
          className="buttons"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.facebook.com/rob.clemens.58152"
          title="My Facebook Profile"
          rel="noopener noreferrer"
          target="_blank"
          className="buttons"
        >
          <FaFacebook />
        </a>
      </div>
      <style jsx>{`
        .button-holder {
          position: fixed;
          bottom: 0px;

          width: 100vw;
          min-width: 250px;
          min-height: 100px;
          z-index: 10;
          display: flex;
          justify-content: space-evenly;
          padding: 20px 0;
          background: rgba(0, 0, 0, 0.95);
        }
        .buttons {
          height: 60px;
          width: 60px;
          border-radius: 50%;

          font-size: 40px;
          color: #c90859;
          display: flex;
          align-content: center center;
          justify-content: center;
          padding-top: 10px;

          box-shadow: 4px 4px 28px rgba(255, 255, 255, 0.2),
            -4px -4px 60px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default SocialButtons;
