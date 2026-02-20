import Link from "next/link";



interface NavBarLink {
  linkText: string;
  href: string;
  target?: string;
}

const navBarLinks = [
  { linkText: "about", href: "/" },
  { linkText: "archive", href: "/archive" },
  { linkText: "submit", href: "https://forms.gle/HmCyG4P1Ytbg9uSG9", target: "_blank" },
  { linkText: "order a post card!", href: "https://docs.google.com/forms/d/e/1FAIpQLSfOTJTp9LrVmYM8vEyL9AqRQpDqkdIu7gvFODVf6VxMNSdumg/viewform?pli=1", target: "_blank"}
];

const StyledLink = ({ navBarLink }: { navBarLink: NavBarLink }) => {
  return (
    <li key={navBarLink.href} className="c-nav__item px-4 m-1 whitespace-nowrap flex items-center rounded-full bg-white/30 hover:bg-white/50 transition-colors">
      <Link href={navBarLink.href} target={navBarLink.target}>
        <strong>
          {navBarLink.linkText}
          <div className="fadingEffect"></div>
        </strong>
      </Link>
    </li>
  );
};

export default function NavBar() {
  return (
    <div className="flex flex-row px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 justify-center">
      <ul className="c-nav flex flex-row">
        {navBarLinks.map((link) => (
          <StyledLink key={link.href} navBarLink={link} />
        ))}
      </ul>
    </div>
  );
}
