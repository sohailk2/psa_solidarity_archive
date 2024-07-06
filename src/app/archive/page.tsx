import Gallery from "./gallery";


export default async function Archive() {    
    const response = await fetch('https://psa-solidarity-archive.vercel.app/api/archive/')
    const data = await response.json()
    console.log("Works", data.data)

    return (
        <Gallery works={data.data}/>
    )
}