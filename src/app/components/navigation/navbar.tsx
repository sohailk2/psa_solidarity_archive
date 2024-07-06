import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="flex pt-24 px-80">
            {/* <Button className="mx-1 light">Home</Button>
                <Button className="mx-1">Archive</Button>
                <Button className="mx-1">Submit</Button> */}
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="home"><Link href="/">home</Link></TabsTrigger>
                    <TabsTrigger value="archive"><Link href="/archive">archive</Link></TabsTrigger>
                    <TabsTrigger value="submit"><Link href="/submit">submit</Link></TabsTrigger>
                </TabsList>
                {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent> */}
            </Tabs>
        </div>
    )
}