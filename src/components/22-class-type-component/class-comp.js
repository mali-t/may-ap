import { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    // propsları burada karşılıyoruz constructor da

    // props lar extend edilen class ın constructor ına gönderilmelidir
    super(props);

    this.state = {
      //buradaki state useState setState le aşağıda değiştirilebiliyor
      message: "hello world",
      hour: 15,
      minute: 34,
    };
  }

  componentDidMount() {
    console.log("ilk girişte çalışır. (Render)");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("re-render durumunda çalışır");

    if (prevState.hour !== this.state.hour) {
      console.log("saat değişti");
    }
    if (prevState.minute !== this.state.minute) {
      console.log("dk değişti");
    }
  }
  componentWillUnmount() {
    console.log("component un-mount olduğunda çalışır");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>
          {this.state.hour}:{this.state.minute}
        </h2>

        <button onClick={() => this.setState({ hour: 19 })}>Set hour</button>
        <button onClick={() => this.setState({ minute: 19 })}>
          Set minute
        </button>
      </div>
    );
  }
}
