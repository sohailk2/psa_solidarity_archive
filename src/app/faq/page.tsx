import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function faq() {
  return (
    <div>
      <br></br>
      <h1 className="text-xl primary-foreground">FAQ</h1>
      <Collapsible>
        <CollapsibleTrigger>Can I submit more than one picture?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
