import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {  // best for api call
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("child componentDidMount");
    this.setState({
      data: data,
    });
  }

  render() {
    
    console.log("data in setState: ", this.state.data);

    return (
      <>
        <h1>Child component name is :: {this.props.name}</h1>
        {console.log("Child render")}
      </>
    );
  }
}

export default Child;
