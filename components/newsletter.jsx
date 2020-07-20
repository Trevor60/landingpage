import Mailchimp from "./subscribe";

const CustomForm = () => {
  return (
    <div>
      <Mailchimp
        action="https://gmail.us10.list-manage.com/subscribe/post?u=95d3742da8d5e23e16601ea8b&amp;id=a9398b477c"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "Your Name?",
            type: "text",
            required: true,
          },
        ]}
        className="myForm"
      />
      <style jsx>{`
        .myForm {
          width: 100%;
        }
        .myInput {
          border: 3px solid #0f67d4;
          background: rgba(0, 0, 0, 0.8);
          width: 40%;
          height: 50px;
          color: #c90859;
          font-size: 20px;
          padding: 10px;
        }
        button {
          border: 1px solid #0f67d4;
          color: #c90859;
          text-decoration: none;
          padding: 20px 50px;
          background: black;
          transition: all 0.5s ease-in-out;
        }

        button:hover {
          background: #0f67d4;
          color: white;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default CustomForm;
