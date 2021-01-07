import React, { Component } from "react";
import "./style.css";

class App extends Component {
  state = {
    Expenses: [],
    name: "",
    date: "",
    amount: "",
  };
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };
  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newExpenses = [...this.state.Expenses];
    newExpenses.push({
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount,
    });
    this.setState({
      Expenses: newExpenses,
      name: "",
      date: "",
      amount: "",
    });
    console.log(newExpenses);
  };
  deleteExpense = (i) => {
    console.log(i);
    const newExpenses = [...this.state.Expenses];
    newExpenses.splice(i, 1);
    this.setState({ Expenses: newExpenses });
  };
  render() {
    return (
      <div className="Container">
        <h1>Expense Tracker</h1>
        <h2>Add A New Item:</h2>
        <div></div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Where was the expense made?"
              onChange={(e) => this.handleNameChange(e)}
              value={this.state.name}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              onChange={(e) => this.handleDateChange(e)}
              value={this.state.date}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              onChange={(e) => this.handleAmountChange(e)}
              value={this.state.amount}
              required={true}
            />
          </div>
          <div className="ButtonDiv">
            <button className="AddExpense">Add Expense</button>
          </div>
        </form>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Date</td>
              <td>Amount</td>
              <td></td>
            </tr>
            {this.state.Expenses.length === 0 ? (
              <tr>
                <td colSpan={4}>No expenses added yet!</td>
              </tr>
            ) : (
              this.state.Expenses.map((el, i) => (
                <tr key={i}>
                  <td>{el.name}</td>
                  <td>{el.date}</td>
                  <td>${el.amount}</td>
                  <td>
                    <button
                      className="DeleteExpense"
                      onClick={() => this.deleteExpense(i)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
