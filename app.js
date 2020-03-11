let countersData = [
  { intialVal: 10, intervalSize: 5, maximumVal: 75, minimumVal: -35 },
  { intialVal: 3, intervalSize: 3, maximumVal: 33, minimumVal: -27 },
  { intialVal: 2, intervalSize: 4, maximumVal: 34, minimumVal: -22 }
];

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intialVal: props.intialVal
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }

  plus() {
    if (this.state.intialVal !== this.props.maximumVal) {
      this.setState({
        intialVal: this.state.intialVal + this.props.intervalSize
      });
      console.log(this.state.intialVal);
    } else {
      alert('This Is The Maximun!');
    }
  }

  minus() {
    if (this.state.intialVal !== this.props.minimumVal) {
      this.setState({
        intialVal: this.state.intialVal - this.props.intervalSize
      });
      console.log(this.state.intialVal);
      console.log('No');
    } else {
      alert('This Is The Minimum!');
    }
  }

  reset() {
    this.setState({
      intialVal: this.props.intialVal
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.intialVal}</h2>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

class Counters extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Num Of Counters:({this.props.data.length})</h1>
        {this.props.data.map(counter => {
          return (
            <Counter
              key={counter.intialVal}
              intialVal={counter.intialVal}
              intervalSize={counter.intervalSize}
              maximumVal={counter.maximumVal}
              minimumVal={counter.minimumVal}
            ></Counter>
          );
        })}
      </div>
    );
  }
}
//Get Root Element By ID(document API)
let rootDiv = document.querySelector('#root');
ReactDOM.render(<Counters data={countersData}></Counters>, rootDiv);
