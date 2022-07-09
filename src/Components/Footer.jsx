import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handelSubmit(event) {
    this.props.handelSubmit(this.state.input);
    this.setState({
      input: "",
    });
  }

  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.input}
              onChange={this.handelChange}
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.handelSubmit}
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
