import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <Link href="mailto:tapestry.gallery.nyc@gmail.com">
          tapestry.gallery.nyc@gmail.com
        </Link>
      </p>

      <h1 className=" mb-6 mt-6 font-bold text-xl primary-foreground">
        Frequently Asked Questions
      </h1>
      <div className="collapsible-container">
        <Accordion type="single" className=" mb-4 w-full">
          <AccordionItem  className="mb-4" value="item-1">
            <AccordionTrigger className=" w-full border-slate-500 h-15 w-84 px-4 py-2 bg-light text-sm">
              Can I submit more than one picture?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Feel free to submit as many pictures as you may have with
              details of the location and description.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem  className="mb-4" value="item-2">
            <AccordionTrigger className=" w-full border-slate-500 h-15 w-84 px-4 py-2 bg-light text-sm">
              Will I be notified if my pictures are used?
            </AccordionTrigger>
            <AccordionContent>
              Yes. All submissions will be notified via the email you provided
              with your Google form submission.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem  className="mb-4" value="item-3">
            <AccordionTrigger className=" w-full border-slate-500  h-15 w-84 px-4 py-2 bg-light text-sm">
              Are video submissions accepted?
            </AccordionTrigger>
            <AccordionContent>Yes.</AccordionContent>
          </AccordionItem>
          <AccordionItem  className="mb-4" value="item-4">
            <AccordionTrigger className=" w-full border-slate-500  h-15 w-84 px-4 py-2 bg-light text-sm">
              Can I submit original flyer/sticker designs?
            </AccordionTrigger>
            <AccordionContent>
              At this time we are only collecting pictures in public areas
              rather than designs of flyers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
