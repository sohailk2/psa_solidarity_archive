"use client";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export interface RetrievalObject {
  url: string;
  location: string;
  date: string;
  description: string;
  tags?: string;
}

interface Props {
  works: RetrievalObject[];
}

interface DialogBoxProps {
  triggerImage: React.ReactElement;
  fullImageSrc: string;
}

const DialogBox = ({ triggerImage, fullImageSrc }: DialogBoxProps) => {
  const [viewSkeleton, setSkeletonState] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerImage}</DialogTrigger>
      <DialogContent className="h-5/6 min-w-3.5 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <div className="relative w-full h-full flex items-center justify-center">
          {viewSkeleton && (
            <div className="flex flex-col space-y-3 absolute inset-0 flex items-center justify-center">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          <img
            src={fullImageSrc}
            alt="Full size image"
            onLoad={() => setSkeletonState(false)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const extractFileIdFromShareableLink = (shareUrl: string): string => {
  let fileId = "";
  
  if (shareUrl.includes("/d/")) {
    // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    fileId = shareUrl.split("/d/")[1].split("/")[0];
  } else if (shareUrl.includes("id=")) {
    // Format: https://drive.google.com/open?id=FILE_ID
    fileId = shareUrl.split("id=")[1].split("&")[0];
  }
  
  return fileId;
};

const getThumbnailLink = (shareUrl: string) => {
  const fileId = extractFileIdFromShareableLink(shareUrl);
  if (!fileId) return shareUrl; // fallback to original
  
  // Proxy thumbnail through our backend to avoid rate limiting
  return `/api/image?id=${fileId}&size=w800`;
};

const getFullQualityLink = (shareUrl: string) => {
  const fileId = extractFileIdFromShareableLink(shareUrl);
  if (!fileId) return shareUrl; // fallback to original
  
  // Proxy full quality through our backend to avoid rate limiting
  return `/api/image?id=${fileId}`;
};

const ImageFigure = (imageObject: RetrievalObject) => {
  const thumbnailURL = getThumbnailLink(imageObject.url);
  const fullQualityURL = getFullQualityLink(imageObject.url);
  return (
    <figure
      key={imageObject.url}
      className="relative w-full pb-[25%] p-4 rounded-md overflow-hidden"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    >
      <div className="relative w-full h-0 pb-[100%] overflow-hidden">
        <DialogBox
          triggerImage={
            <img
              src={thumbnailURL}
              alt={imageObject.description}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

          }
          fullImageSrc={fullQualityURL}
        />
      </div>
      <figcaption className="pt-2 text-xs text-muted-foreground">
        Location{" "}
        <div
          className="text-foreground"
          style={{ fontSize: "clamp(0.5rem, 2vw + 0.5rem, .8rem)", height: '2.5em', textOverflow: 'ellipsis', overflow: 'hidden', }}
        >
          {imageObject.location}
        </div>
        <br />
        Date{" "}
        <div
          className="text-foreground"
          style={{ fontSize: "clamp(0.5rem, 2vw + 0.5rem, .8rem)", height: '1em' }}
        >
          {imageObject.date}
        </div>
        <br />
        Description{" "}
        <div
          className="text-foreground"
          style={{
            fontSize: "clamp(0.5rem, 2vw + 0.5rem, .8rem)",
            maxHeight: "100px",
            overflowY: "auto",
            height: '5.5em',
            textOverflow: 'ellipsis'
          }}
        >
          {imageObject.description}
        </div>
        <br />
        <div>
          {imageObject.tags ? (
            <Badge className="bg-amber-500/50" variant="secondary">
              {imageObject.tags}
            </Badge>
          ) : (
            ""
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default function Gallery(props: Props) {
  return (
    <ScrollArea>
      <h1>
        Number of Entries:{" "}
        <Badge className="bg-neutral-100" variant="secondary">
          {" "}
          {props.works.length}
        </Badge>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {props.works.map((work) => {
          return ImageFigure(work);
        })}
      </div>
    </ScrollArea>
  );
}
