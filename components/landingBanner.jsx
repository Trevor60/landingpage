import CustomForm from "../components/newsletter";

const LandingBanner = () => {
  return (
    <div>
      <div className="content">
        <h1>3000$ a month, no matter what?</h1>
        <div className="divider"></div>
        <p>
          Sounds too good to be true? Subscribe here for free and I will teach
          you how!
        </p>
        <h3>Subscribe now and get your first free tool! Right now!</h3>
        <CustomForm />
        <p>
          * you can always unsubscribe my newsletter
          <br />
          no hard feelings, no problem!
        </p>
      </div>
      <style jsx>{`
        .content {
          position: relative;
          padding: 50px 0;
          width: 95vw;
          max-width: 1080px;
          margin: 15vh auto;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 10px;
          text-align: center;
          box-shadow: 11px 11px 22px black;
        }
        @media only screen and (max-width: 800px) {
          .content {
            padding: 10px 0;
            margin: auto auto;
          }
        }
        .divider {
          height: 3px;
          width: 40%;
          background: #0f67d4;
          margin: auto auto;
        }
        .button {
          border: 1px solid #c90859;
          color: #c90859;
          text-decoration: none;
          padding: 20px 50px;
          background: black;
          transition: all 0.5s ease-in-out;
        }
        .button:hover {
          background: #c90859;
          color: black;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default LandingBanner;
