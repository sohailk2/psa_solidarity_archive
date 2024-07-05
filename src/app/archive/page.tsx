import Gallery from "./gallery";


export default async function Archive() {
    const response = await fetch('http://localhost:3000/api/archive/')
    const data = await response.json()
    console.log("Works", data.data)

    return (
        <Gallery works={data.data}/>
    )
}