import { Component } from "react";

class Second extends Component{

    constructor(props){
        super(props);
        console.log("second constructor")
    }

    componentDidMount(){
        console.log("second componentDidMount");
        
    }

    render(){
        return (
            <>
              <h1>Second Component name is :: {this.props.name} </h1>

              {console.log("second render")}
            </>
        )
    }
}

export default Second;