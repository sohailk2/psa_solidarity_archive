import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <br></br>
      <p className="text-xl primary-foreground">
        The
        <HoverCard>
          <HoverCardTrigger>
            &nbsp;Palestine Solidarity Archive&nbsp;
          </HoverCardTrigger>
          <HoverCardContent>
            can put stuff here, trying something
          </HoverCardContent>
        </HoverCard>
        aims to preserve and document the history and memory of Palestinians,
        the resistance movement, and global expressions of solidarity through
        art, stickers, graffiti, and protests. By doing so, we seek to preserve
        collective memories of these injustices and genocides, along with the
        unwavering acts of solidarity and resistance.
        <br></br>
        <br></br>
        We are currently gathering original photographs of signs, art, stickers,
        and graffiti that support the Palestinian liberation movement, which you
        may encounter in public spaces such as streets, walls, subways, bridges,
        and protests. Please keep in mind safety, security, and anonymity when
        submitting materials with identifying information, such as photos, email
        addresses, and names (made optional in the form). Digital security tools
        can help strip metadata and obscure faces, especially for recent
        protests.
        <br></br>
        <br></br>
        Your submission may be featured in an online gallery or a physical
        installation. We will not be using any personal/identifying data when
        publishing works. Submission deadline: July 27, 2024
        <br></br>
        <br></br>
        If you have any questions, please contact:
        <Link href={`mailto:tapestry.gallery.nyc@gmail.com`}>
          tapestry.gallery.nyc@gmail.com
        </Link>
      </p>
    </div>
  );
}
