import React, { Component } from "react";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";
import { messageGenerator } from "../faker";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",
      chatsList: messageGenerator(10),
      gravatar: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelScroll = this.handelScroll.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  handelSubmit(message) {
    console.log(message);
    this.setState((state) => {
      return {
        ...state,
        chatsList: [
          ...state.chatsList,
          { type: "sent", message, time: new Date().toLocaleTimeString() },
        ],
      };
    });
  }

  handelScroll(event) {
    if (!event.target.scrollTop) {
      this.fetchMessages(10);
    }
  }

  fetchMessages(count) {
    this.setState((state) => {
      return {
        chatsList: [...messageGenerator(count), ...state.chatsList],
      };
    });
  }

  render() {
    return (
      <>
        <div className="container bootstrap snippets">
          <div className="col-md-7 col-xs-12 col-md-offset-2">
            <div className="panel" id="chat">
              <Heading title={this.state.title} />
              <Body
                handelScroll={this.handelScroll}
                chatsList={this.state.chatsList}
                gravatar={this.state.gravatar}
              />
              <Footer handelSubmit={this.handelSubmit} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
