import React from "react";
import LeftNav from "./LeftNav";
import Login from "./Login";
import SignUp from "./SignUp";

function Home() {
  return (
    <>
      <LeftNav />
      <div className="mainArea">
        {/* <div className="chatArea">
          <h3> Ashish Tiwari </h3>
          <div className="chatbox">
            <div className="chats">
              <div className="left">
                <div>
                  <img
                    className="avatar"
                    src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                    width="30px"
                  />
                </div>
                <div>
                  <div className="chatMsg">Left</div>
                  <div className="chat-time">10:00 PM</div>
                </div>
              </div>
              <div className="right">
                <div>
                  <img
                    className="avatar"
                    src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                    width="30px"
                  />
                </div>
                <div>
                  <div className="chatMsg">Right</div>
                  <div className="chat-time">10:00 PM</div>
                </div>
              </div>
            </div>
            <div className="chatInput">
              <input type="text" placeholder="Write a message" />
              <button type="button">S END</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
