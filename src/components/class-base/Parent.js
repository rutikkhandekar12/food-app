import { Component } from "react";
import Child from "./Child";
import Second from "./Second";

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent componentDidMount");
  }

  render() {
    return (
      <>
        <h1>ClassBase component</h1>
        <Child name="Rutik"/>
        <Second name="Adarsh"/>
        {console.log("Parent render")}
      </>
    );
  }
}

export default Parent;
