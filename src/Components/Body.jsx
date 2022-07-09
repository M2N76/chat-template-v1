import React, { Component } from "react";
import Chat from "./Chat";

export default class Body extends Component {
  chatListWrapper = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.chatsList.length !== this.props.chatsList.length) {
      return this.chatListWrapper.current.scrollHeight;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const wrapper = this.chatListWrapper.current;
      wrapper.scrollTop = wrapper.scrollHeight - snapshot;
    }
  }
  render() {
    const chats = this.props.chatsList.map((chat, index) => {
      const isLeft = "receive" === chat.type;
      return (
        <Chat
          gravatar={
            isLeft ? this.props.gravatar.user2 : this.props.gravatar.user1
          }
          key={chat.id}
          time={chat.time}
          message={chat.message}
          isLeft={isLeft}
        />
      );
    });

    return (
      <div
        ref={this.chatListWrapper}
        onScroll={this.props.handelScroll}
        className="panel-body chats"
      >
        {chats}
      </div>
    );
  }
}
