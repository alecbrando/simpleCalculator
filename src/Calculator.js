import React from 'react';

export default class Calculator extends React.Component {
    constructor(props){
        super()
        this.state = {
          result: 0,
          num1: '',
          num2: '',
        }
    }

    handleFirstNum = e => {
        this.setState({ num1: parseInt(e.target.value) });
    }

    handleSecondNum = e => {
        this.setState({ num2: parseInt(e.target.value) });
    }

    add = (e) => {
        const {
            num1,
            num2
        } = this.state;

        this.setState({ result: num1 + num2 });
    }

    subtract = (e) => {
        const {
            num1,
            num2
        } = this.state;

        this.setState({ result: num1 - num2 });
    }
    
    multiply = (e) => {
        const {
            num1,
            num2
        } = this.state;

        this.setState({ result: num1 * num2 });
    }

    divide = (e) => {
        const {
            num1,
            num2
        } = this.state;

        this.setState({ result: num1 / num2 });
    }

    clearInput = (e) => {
        this.setState({ result: 0, num1: '', num2: ''});
    }

    render(){
        const { num1, num2 } = this.state;
        return (
            <>
                <h1>Result: {this.state.result}</h1>
                <input onChange={this.handleFirstNum} value={num1} placeholder='First Number' />
                <input onChange={this.handleSecondNum} value={num2} placeholder='Second Number' />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                <button onClick={this.clearInput}>clear</button>
            </>
        );
    }
}


