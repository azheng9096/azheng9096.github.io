import Image from "next/image";
import profilePic from "../public/images/birb.jpg";
import "@/styles/components/header.scss";

type Props = {
  links: SocialLink[];
};

type SocialLink = {
  title: string;
  href: string;
};

export default function Header({ links }: Props) {
  return (
    <div className="row">
      <div className="col-md-12 text-white" id="header">
        <div id="display">
          <Image src={profilePic} alt="Profile Picture" />
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
            {links.map((link) => (
              <li>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
