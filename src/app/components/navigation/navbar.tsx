import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { link } from "fs";
import Link from "next/link";

interface NavBarLink {
  linkText: string;
  href: string;
  target?: string;
}


const navBarLinks = [
  { linkText: "about", href: "/" },
  { linkText: "archive", href: "/archive" },
  { linkText: "submit", href: "https://forms.gle/HmCyG4P1Ytbg9uSG9", target: "_blank" }
]
const styledLink = (navBarLink: NavBarLink) => {
  return (
    <li className="c-nav__item px-2">
      <Link href={navBarLink.href} target={navBarLink.target}>
        <strong>
          {navBarLink.linkText}
          <div className="fadingEffect" ></div>
        </strong>
      </Link>
    </li>
  )
}

export default function NavBar() {

  return (
    <div className="flex flex-row px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 justify-center">
      <ul className="c-nav flex flex-row">
        {navBarLinks.map((link) => styledLink(link))}
      </ul>
    </div>
  );
}
