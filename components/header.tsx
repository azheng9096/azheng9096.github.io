import Image from "next/image";
// import profilePic from "/images/birb.jpg";
import "@/styles/components/header.scss";

export default function Header() {
  return (
    <div className="row">
      <div className="col-md-12 text-white" id="header">
        <div id="display">
          <Image
            src="/images/birb.jpg"
            alt="Profile Picture"
            width="50"
            height="50"
          />
          <div id="headerText">
            <h1 id="title">
              Welcome to <span id="headerName">Anna Zheng's</span> Portfolio
            </h1>
            <hr />
            <div id="sub">
              <p>
                Code, Design, Create. Contact me at{" "}
                <span>anna.zheng@nyu.edu</span>
              </p>
            </div>
          </div>
        </div>

        <div id="headerSocial">
          <ul>
            <li>
              <a href="https://github.com/azheng9096">GitHub</a>
            </li>
            <li>
              <a href="https://nyu.joinhandshake.com/stu/users/27360975">
                Handshake
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anna-zheng-965866203/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
