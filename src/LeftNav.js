import React from "react";
import { Link } from "react-router-dom";

function LeftNav() {
  const showModal = () => {
    console.log("HII SHOW MODAL NOW");
  };

  return (
    <div className="leftNav">
      <div className="leftNav-top">
        {/* TOP */}
        <h1>All chats</h1>
      </div>
      <div className="leftNav-middle">
        {/* <ul>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Signup</Link>
          </li>
        </ul> */}
        <ul>
          <li>
            <Link>Name 1</Link>
          </li>
          <li>
            <Link>Name 2</Link>
          </li>
          <li>
            <Link>Name 3</Link>
          </li>
          <li>
            <Link>Name 4</Link>
          </li>
          <li onClick={showModal} className="showAllModal">
            Show All chats...
          </li>
        </ul>
      </div>
      <div className="leftNav-bottom">
        Made with <br /> ❤️ and
        <img src="https://www.devexhub.com/wp-content/uploads/2019/12/javascript-icon-png-23.png" />
        <br />
        by Ashish Tiwari
      </div>
    </div>
  );
}

export default LeftNav;
