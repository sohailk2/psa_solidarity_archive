import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 justify-center">
      {/* <Button className="mx-1 light">Home</Button>
                <Button className="mx-1">Archive</Button>
                <Button className="mx-1">Submit</Button> */}
      <Tabs defaultValue="account" className="max-w-[400px]">
        <TabsList>
          <TabsTrigger value="about">
            <Link href="/">about</Link>
          </TabsTrigger>
          <TabsTrigger value="archive">
            <Link href="/archive">archive</Link>
          </TabsTrigger>
          <TabsTrigger value="submit">
            <Link href="https://forms.gle/HmCyG4P1Ytbg9uSG9" target="_blank">
              submit
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
