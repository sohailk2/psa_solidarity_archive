"use client";
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"

interface Props {
    works: RetrievalObject[]
}

export interface RetrievalObject {
    url: string,
    location: string,
    date: string
    description: string
}



const dialogBox = (triggerImage: React.ReactElement, fullImageSrc: string) => {
    const [viewSkeleton, setSkeletonState] = useState('')

    return (
        // Should make this transparent so it looks good and then don't need to worry about the sizing? also remove margins?
        <Dialog>
            <DialogTrigger asChild>{triggerImage}</DialogTrigger>
            <DialogContent className="h-5/6 min-w-3.5 w-11/12">
                <div className="">

                    {/* weird, image just goes over this loader after i loads */}
                    <div className="flex flex-col space-y-3" style={{display: viewSkeleton}}>
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                    <Image
                        src={fullImageSrc}
                        alt="Full size image"
                        layout="fill"
                        objectFit="contain"
                        onLoad={(e) => setSkeletonState('none')}
                    />

                </div>
            </DialogContent>
        </Dialog>
    );
};

const getDisplayLinkFromShareableLink = (shareUrl: string) => {
    return shareUrl.replace("open?", "uc?export=view&")
}

const ImageFigure = (imageObject: RetrievalObject) => {

    const viewURL = getDisplayLinkFromShareableLink(imageObject.url)
    return (
        <figure key={imageObject.url} className="shrink-0 p-5" style={{ backgroundColor: "white" }}>
            <div className="relative w-full h-0 pb-[100%] overflow-hidden">
                {dialogBox(
                    <Image
                        // src={imageObject.url}
                        // Drive Link: https://github.com/orgs/community/discussions/86986#discussioncomment-8118482
                        // src='https://drive.google.com/uc?export=view&id=1PIAdMX8vh00yO4Yf4U0R9WQfFv3-diNT'
                        // for thumbnail: display this -> speed up load times for the website
                        // https://stackoverflow.com/questions/25648388/permanent-links-to-thumbnails-in-google-drive-api
                        src={viewURL}
                        alt={`${imageObject.url}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        width={300}
                        height={300}
                    />,
                    viewURL
                )}
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
                Location{" "}
                <div className="font-semibold text-foreground">
                    {imageObject.location}
                </div>
                <br></br>
                Description{" "}
                <div className="font-semibold text-foreground">
                    {imageObject.description}
                </div>
            </figcaption>
        </figure>
    )
}

export default function Gallery(props: Props) {

    // console.log(props.works)

    // props.works.map((work) => {
    //     console.log(work.location)
    // })

    return (
        <ScrollArea>
            <div className="grid grid-cols-5 gap-4 p-4">
                {
                    props.works.map((work) => {
                        return (
                            ImageFigure(work)
                        )
                    })
                }
            </div>
        </ScrollArea>
    )


    // const dialogBox = (triggerImage: React.ReactElement, fullImageSrc: string) => {
    //     return (
    //         // Should make this transparent so it looks good and then don't need to worry about the sizing? also remove margins?
    //         <Dialog>
    //             <DialogTrigger asChild>{triggerImage}</DialogTrigger>
    //             <DialogContent className="h-5/6 min-w-3.5 w-11/12">
    //                 <div className="">
    //                     <Image
    //                         src={fullImageSrc}
    //                         alt="Full size image"
    //                         layout="fill"
    //                         objectFit="contain"
    //                     />
    //                 </div>
    //             </DialogContent>
    //         </Dialog>
    //     );
    // };


    // return (
    //     <ScrollArea className="">
    //         <div className="grid grid-cols-5 gap-4 p-4">
    //             {props.works.map((image : RetrievalObject) => (
    //                 <figure key={image.url} className="shrink-0">

    //                     <div className="relative w-full h-0 pb-[100%] overflow-hidden">
    //                         {dialogBox(
    //                             <Image
    //                                 src={image.url}
    //                                 alt={`Photo by ${image.date}`}
    //                                 className="absolute top-0 left-0 w-full h-full object-cover"
    //                                 width={300}
    //                                 height={300}
    //                             />,
    //                             image.url
    //                         )}
    //                     </div>
    //                     <figcaption className="pt-2 text-xs text-muted-foreground">
    //                         Photo by{" "}
    //                         <span className="font-semibold text-foreground">
    //                             {image.description}
    //                         </span>
    //                     </figcaption>
    //                 </figure>
    //             ))}
    //         </div>
    //         <ScrollBar orientation="vertical" />
    //     </ScrollArea>
    // )
}