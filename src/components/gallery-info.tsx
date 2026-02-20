import Image from "next/image";
import Link from "next/link";

export default function GalleryInfo() {
  return (
    <div className="my-8 rounded-lg overflow-hidden">
      <div className="bg-white/50 p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-slate-700">
          In-Person Exhibition Now Open
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <Image
              src="/flyer.png"
              alt="Palestine Solidarity Archive In-Person Gallery"
              width={400}
              height={500}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 space-y-3 text-slate-700">
            <div>
              <h1 className="font-bold">Dates</h1>
              <p>January 24 - March 8</p>
            </div>
            <div>
              <h2 className="font-bold">Location</h2>
              <Link href="https://www.heretosunday.com/" target="_blank" className="text-teal-700 hover:underline">From Here to Sunday</Link>
              <br></br>
              <Link href="https://maps.app.goo.gl/UcJGySAAJBPhEk1N8?g_st=ic" className="text-teal-700 hover:underline">567 Union Street, Brooklyn, NY 11215</Link>
            </div>
            <div>
              <h2 className="font-bold">Hours</h2>
              <p>Tuesday - Sunday, 2-6PM</p>
            </div>
            <p className="text-sm italic">
              Photo Exhibit & Fundraiser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
