import Link from "next/link";
import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import GitIcon from "@/public/socialIcons/github.png";
import LinkedInIcon from "@/public/socialIcons/linkedin.png";
import InstagramIcon from "@/public/socialIcons/instagram.png";
import MetaIcon from "@/public/socialIcons/meta.png";
import XIcon from "@/public/socialIcons/twitter.png";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      icon: GitIcon,
      name: "Git",
      url: "",
    },
    {
      icon: LinkedInIcon,
      name: "Linkedin",
      url: "",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      url: "",
    },
    {
      icon: MetaIcon,
      name: "Meta",
      url: "",
    },
    {
      icon: XIcon,
      name: "X",
      url: "",
    },
  ];
  const footerLinks = [
    {
      name: "About Us",
      url: "",
    },
    {
      name: "Contact",
      url: "",
    },
    {
      name: "Services",
      url: "",
    },
    {
      name: "Become a Partner",
      url: "",
    },
    {
      name: "Become a Creator",
      url: "",
    },
    {
      name: "Business Queries",
      url: "",
    },
    {
      name: "Report an Issue",
      url: "",
    },
    {
      name: "Terms & Conditions",
      url: "",
    },
  ];
  return (
    <footer className="p-2 border-t">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-xl font-bold uppercase">Get Connected with Us.</h4>
        <ul className="flex justify-center items-center gap-4 p-1.5">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>
                <Image src={link.icon} height={25} width={25} alt={link.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 uppercase text-sm">
        <ul className="grid grid-cols-5 gap-4 border-b pb-4">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center items-center gap-1 text-xs font-semibold">
          <p>Copyright</p>
          <FaRegCopyright />
          <p>2024-2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
