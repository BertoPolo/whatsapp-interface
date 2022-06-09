import ChatBackground from "./ChatBackground.jsx";
import NewChatColumn from "./NewChatColumn.jsx";
import UserChat from "../UserChat/UserChat.jsx";
import User from "../User/User.jsx";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { changeisNewChat } from "../../slices/chat/chatSlice";
import "./ChatBox.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const isNewChat = useSelector((state) => state.chat.isNewChat);
  const dispatch = useDispatch();
  const [chats, setChats] = useState([]);


  const navigate = useNavigate()

  useEffect(() => {
    getChat();
  }, []);

  const handleLogOut = () => {
    window.location.href = "/login";
    localStorage.removeItem("token");
  };

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

  return (
    <>
      <ChatBackground />
      <div className="main-container">
        {isNewChat ? (
          <NewChatColumn />
        ) : (
          <div className="data-column">
            <div className="user">
              <div className="first-tab">
                <div className=" col-8">
                  <img
                    id="Pimg"
                    src={require("../../Data/whatsapp-logo.png")}
                    alt="Pimg"
                  />
                </div>
                <div className="Lborder col-4">
                  <svg
                    className="icons1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" />
                  </svg>

                  <svg
                    className="icons2 bi bi-chat-left-text-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    onClick={() => dispatch(changeisNewChat(!isNewChat))}
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                  </svg>

                  <Dropdown>
                    <Dropdown.Toggle variant="transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="bi bi-three-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">New group</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Starred messages
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={()=>navigate("/settings")}>Settings</Dropdown.Item>
                      <Dropdown.Item href="#/action-4" onClick={handleLogOut}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="search">
              <div className="searchTab-1 col-3">
                <svg
                  className="icons3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                </svg>
              </div>
              <div className="col-9">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search or start new chat"
                ></input>
              </div>
            </div>
            <div className="list">
              {chats.map((chat) => {
                // console.log(chat);
                return (
                  <User
                    key={chat._id}
                    id={chat._id}
                    name={chat.members[0].username}
                    lastMessage={
                      chat.messages.length
                        ? chat.messages[chat.messages.length - 1].text
                        : "No messages"
                    }
                  />
                );
              })}
            </div>
          </div>
        )}

        <UserChat />
      </div>
    </>
  );
};

export default Chat;
