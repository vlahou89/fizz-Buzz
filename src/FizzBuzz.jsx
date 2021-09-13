import React from "react";
import "./FizzBuzz.css";

class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  fizzBuzz = (number) => {
    if (number % 7 === 0 && number % 5 === 0 && number % 3 === 0) {
      return "FizzBuzzBosh";
    }

    if (
      (number % 7 === 0 && number % 5 === 0) ||
      (number % 5 === 0 && number % 3 === 0) ||
      (number % 3 === 0 && number % 7 === 0)
    ) {
      return "FizzBosh";
    }

    if (number % 7 === 0) {
      return "Bosh";
    }

    if (number % 3 === 0) {
      return "Fizz";
    }

    if (number % 5 === 0) {
      return "Buzz";
    }

    return number;
  };

  increase = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  decrease = () => {
    this.setState((state) => {
      if (state.count - 1 < 0) {
        return state.count;
      }

      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <div className="counter">
        <div className="glass">
          <button onClick={this.decrease} className="button ">
            -
          </button>

          <span className="display">{this.fizzBuzz(this.state.count)}</span>
          <button onClick={this.increase} className="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default FizzBuzz;
