import React from "react";

// you cannot create a class component without
// a render method

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state here
    this.state = {
      //   count: 0,
      //   count2: 0,
      userInfo: {
        name: "dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("child - constructor " + `${this.props.name}`);
  }

  async componentDidMount() {
    // API call
    const data = await fetch("https://api.github.com/users/Nishks");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    console.log("child - componentDidMount " + `${this.props.name}`);
  }

  //   handleClick = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };

  render() {
    console.log("child - render " + `${this.props.name}`);
    return (
      <>
        <h1>Profile class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="image" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click</button> */}
      </>
    );
  }
}

export default Profile;
