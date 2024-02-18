import React from "react";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
    };
  }

  onFormChange = (event) => {
    switch (event.target.name) {
      case "user-name":
        this.setState({ name: event.target.value });
        break;
      case "user-age":
        this.setState({ age: event.target.value });
        break;
      default:
        return;
    }
  };

  onProfileUpdate = (data) => {
    fetch(`https://bs-server-50x5.onrender.com/${this.props.user.id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ formInput: data }),
    })
      .then((resp) => {
        if (resp.status === 200 || resp.status === 304) {
          this.props.toggleModal();
          this.props.loadUser({ ...this.props.user, ...data });
        }
      })
      .catch(console.log);
  };

  render() {
    const { user } = this.props;
    const { name, age } = this.state;
    return (
      <div className="profile-modal">
        <article className="br3 ba b--black-10 b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-1 center bg-near-black">
          <main className="pa4 black-80 w-80">
            <img
              src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
              className="h3 w3 dib pointer"
              alt=""
            />
            <h1 className="white">{this.state.name}</h1>
            <h4 className="white">{`Images Submitted: ${user.entries}`}</h4>
            <p className="white">{`Member since: ${new Date(
              user.joined
            ).toLocaleDateString()}`}</p>
            <hr />
            <label className="mt2 fw6 white pa1" htmlFor="user-name">
              Name:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder={user.name}
              type="text"
              name="user-name"
              id="name"
            />
            <div
              className="mt4"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button
                onClick={() => this.onProfileUpdate({ name, age })}
                className="b pa2 grow pointer hover-black w-40 bg-light-black b--black-20"
              >
                Save
              </button>
              <button
                className="b pa2 grow pointer hover-black w-40 bg-near-gray b--black-20"
                onClick={this.props.toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>
          <div
            className="modal-close white hover-gray"
            onClick={this.props.toggleModal}
          >
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
