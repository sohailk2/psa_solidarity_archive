import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// let createSVG = (linkWidth: number) => {
//   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   svg.setAttribute("width", linkWidth.toString());
//   svg.setAttribute("height", "20");

//   const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   var pathD = randomizePath(linkWidth);

//   path.setAttribute("d", pathD);
//   path.setAttribute("fill", "transparent");
//   path.setAttribute("stroke", "lightgrey");
//   path.setAttribute("stroke-width", "7");
//   path.setAttribute("stroke-linecap", "round");

//   svg.appendChild(path);

//   return svg;
// };
// function randomizePath(linkWidth: number) {
//   var moveYMin = 5;
//   var moveYMax = 12;
//   var curveXMin = 20;
//   var curveXMax = linkWidth; /* Width of the link */
//   var curveYMin = 5;
//   var curveYMax = 20;
//   var endYMin = 5;
//   var endYMax = 10;
//   var moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
//   var curveX = Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
//   var curveY = Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
//   var endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

//   var newPath = `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth - 7} ${endY}`;

//   return newPath;
// }

export default function NavBar() {
  // var links = document.querySelectorAll(".c-nav__item a");

  // links.forEach(function (link) {
  //   var linkWidth = parseInt(link. .offsetWidth);
  //   var svg = createSVG(linkWidth);
  //   insertAfter(svg, link);
  // });

  return (
    <div className="flex px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 justify-center">
      {/* <Button className="mx-1 light">Home</Button>
                <Button className="mx-1">Archive</Button>
                <Button className="mx-1">Submit</Button> */}

      <ul className="c-nav">
        <li className="c-nav__item">
          {" "}
          <Link href="/">about</Link>
        </li>
        <li className="c-nav__item">
          {" "}
          <Link href="/archive">
            <strong>
              archive
              <div className="fadingEffect"></div>
            </strong>
          </Link>
        </li>
        <li className="c-nav__item">
          <Link href="https://forms.gle/HmCyG4P1Ytbg9uSG9" target="_blank">
            submit
          </Link>
        </li>
      </ul>
    </div>
  );
}
