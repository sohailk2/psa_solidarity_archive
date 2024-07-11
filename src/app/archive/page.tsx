import Gallery from "./gallery";
import {RetrievalObject} from "./gallery";

export default async function Archive() {    
    const response = await fetch('https://psa-solidarity-archive.vercel.app/api/archive/', {next: { revalidate: 60 }})
    // const response = await fetch('http://localhost:3000/api/archive')

    // TODO: figure this out -> vercel thing with backend and client deployed at same time
    // deploy next js backend route seperately vercel, deploy it twice?
    let works: RetrievalObject[] = []
    try {
        const res = await response.json()
        works = res.data
    } catch {
        console.log("api/archive not found")
    }
    console.log("Works", works)

    // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation
    // its caching the api responses. we don't want that
    return (
        <Gallery works={works}/>
    )
}