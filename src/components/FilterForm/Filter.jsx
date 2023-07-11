const { Component } = require("react");

class Filter extends Component {

    render(){
        return <>
        <input type="text" onChange={this.props.handleChange} />
        </>
    }
}

export default Filter