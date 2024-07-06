import Gallery from "./gallery";
import {RetrievalObject} from "./gallery";

export default async function Archive() {    
    const response = await fetch('https://psa-solidarity-archive.vercel.app/api/archive/')

    // TODO: figure this out -> vercel thing with backend and client deployed at same time
    // deploy next js backend route seperately vercel
    let works: RetrievalObject[] = []
    try {
        const res = await response.json()
        works = res.data
    } catch {
        console.log("api/archive not found")
    }
    console.log("Works", works)

    return (
        <Gallery works={works}/>
    )
}