import jsonp from "jsonp";
import PropTypes from "prop-types";
import Link from "next/link";

class Mailchimp extends React.Component {
  state = {};

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields
      .map((field) => {
        return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
      })
      .join("&");
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state["EMAIL"];
    !regex.test(email)
      ? this.setState({ status: "empty" })
      : this.sendData(url);
  }

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: "duplicate" });
      } else if (err) {
        this.setState({ status: "error" });
      } else if (data.result !== "success") {
        this.setState({ status: "error" });
      } else {
        this.setState({ status: "success" });
      }
    });
  }

  render() {
    const { fields, styles, className, buttonClassName } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages,
    };
    const { status } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="myForm">
          {fields.map((input) => (
            <input
              {...input}
              key={input.name}
              onChange={({ target }) =>
                this.setState({ [input.name]: target.value })
              }
              defaultValue={this.state[input.name]}
              className="myInput"
            />
          ))}
          <button
            disabled={status === "sending" || status === "success"}
            type="submit"
            className={buttonClassName}
          >
            <b>{messages.button}</b>
          </button>
          <div className="msg-alert">
            {status === "sending" && (
              <p style={styles.sendingMsg}>{messages.sending}</p>
            )}
            {status === "success" && (
              <p>
                Thanks for Subscribing! <br />
                Click here for you first piece of cake :)
                <br />
                <br />
                <br />
                <Link href="/voomo">
                  <a
                    title="safe income - forever sponosred by Voomo"
                    className="button"
                  >
                    Let's go!
                  </a>
                </Link>
              </p>
            )}
            {status === "duplicate" && (
              <p style={styles.duplicateMsg}>{messages.duplicate}</p>
            )}
            {status === "empty" && (
              <p style={styles.errorMsg}>{messages.empty}</p>
            )}
            {status === "error" && (
              <p style={styles.errorMsg}>{messages.error}</p>
            )}
          </div>
        </form>
        <style jsx>{`
          .myForm {
            width: 100%;
            max-width: 900px;
            margin: auto auto;
            display: grid;
            grid-layout-comulns: 1fr;
            grid-gap: 30px;
            text-align: center;
          }
          .myInput {
            border: 3px solid #0f67d4;
            background: rgba(255, 255, 255, 0);
            width: 80%;
            margin: auto auto;
            height: 50px;
            color: #0f67d4;
            font-size: 20px;
            padding: 10px;
          }
          input:focus {
            outline: none;
            background: black;
          }
          button {
            border: 1px solid #0f67d4;
            color: #0f67d4;
            text-decoration: none;
            padding: 20px 50px;
            background: black;
            transition: all 0.5s ease-in-out;
            font-size: 22px;
            width: 80%;
            margin: auto auto;
          }

          button:hover {
            background: #0f67d4;
            color: white;
          }
          .button {
            border: 1px solid #c90859;
            color: #c90859;
            text-decoration: none;
            padding: 20px 50px;
            background: black;
            transition: all 0.5s ease-in-out;
            font-size: 22px;
            width: 80%;
            margin: auto auto;
          }

          .button:hover {
            background: #c90859;
            color: black;
          }
        `}</style>
      </div>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe!",
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      color: "#0652DD",
    },
    successMsg: {
      color: "#009432",
    },
    duplicateMsg: {
      color: "#EE5A24",
    },
    errorMsg: {
      color: "#ED4C67",
    },
  },
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Mailchimp;
