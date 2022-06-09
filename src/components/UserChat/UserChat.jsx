import React, { useState } from "react";
import { useEffect } from "react";
import "./UserChat.css";
import { Dropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

const UserChat = () => {
  const [chats, setChats] = useState([]);
  const isUser = chats._id;

  useEffect(() => {
    getChat();
  }, []);

  const getChat = async () => {
    try {
      const res = await fetch("https://whatsapp-v1-api.herokuapp.com/chats", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
        data = await res.json();
      if (data) {
        setChats(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //messages--------------------------

  // I was not able to retrieve the data trought redux store, the idea is to retrive the data,
  // it needs to be mapped at line 86.
  // this same map need to be applied to data list, that display the amount of user.
  //as mow there I couldn't find  a way to iplemet a new chat window onClick on a new user.

  return (
    <>
      <div className="User-Chat">
        <div className="chat-header">
          <div className="imgBox col-1">
            <img
              className="chat-img"
              src={require("../../Data/whatsapp-logo.png")}
              alt="img"
            />
          </div>
          <div className="chat-username">
            {chats.map((chat) => {
              return (
                <>
                  <h6 id="chat-username"> {chat.members[0].username}</h6>
                  <p id="chat-connection">{chat.members[0].lastOnline}</p>
                </>
              );
            })}
          </div>
          <div className="chat-header-icons col-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
        </div>
        <div className="chat-body">
          <Container id="chatBox">
            {/* //conver time with moment .js for time of messages  */}
            return (
            <>
              {isUser ? (
                <div className="chat-message-user">
                  <h5 className="chat-message">asd</h5>
                  <span className="chat-time-other">6:00pm</span>
                </div>
              ) : (
                <div className="chat-message-other">
                  <h5 className="chat-message">
                    loaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </h5>
                  <span className="chat-time-user">8:34pm</span>
                </div>
              )}
            </>
            );
          </Container>
        </div>
        <div className="chat-bottom">
          <div className="chat-input-bar">
            <div className="chat-bottom-icons col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-paperclip"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>
            </div>
            <div className="chat-input col-10">
              <input id="chat" type="text" placeholder="Type a message..." />
            </div>
            <div className="chat-bottom-icons col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-mic-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserChat;
