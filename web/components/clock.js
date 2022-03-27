import * as React from "react";

class Clock extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }

    componentDidMount() {
        this.refresh = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.refresh);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    
    render() {
        return (
            <h2>It is {this.state.time}.</h2>
        );
    }
} 

export default () => {
    return (
        <Clock/>
    )
}

