"use client";
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import * as React from "react"

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

export interface Artwork {
    artist: string
    art: string
}


const Gallery = (props) => {

    const dialogBox = (triggerImage: React.ReactElement, fullImageSrc: string) => {
        return (
            <Dialog>
                <DialogTrigger asChild>{triggerImage}</DialogTrigger>
                <DialogContent className="h-5/6 min-w-3.5 w-11/12">
                    <div className="">
                        <Image
                            src={fullImageSrc}
                            alt="Full size image"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        );
    };


    return (
        <ScrollArea className="">
            <div className="grid grid-cols-5 gap-4 p-4">
                {props.works.map((artwork) => (
                    <figure key={artwork.artist} className="shrink-0">

                        <div className="relative w-full h-0 pb-[100%] overflow-hidden">
                            {dialogBox(
                                <Image
                                    src={artwork.art}
                                    alt={`Photo by ${artwork.artist}`}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />,
                                artwork.art
                            )}
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            Photo by{" "}
                            <span className="font-semibold text-foreground">
                                {artwork.artist}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}

export default Gallery;