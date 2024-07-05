import Gallery from "./gallery";

interface Artwork {
    artist: string
    art: string
}

const getARouteThatTakesAWhile = () => {
    setTimeout(() => { console.log("Loaded") }, 6000)

    const works: Artwork[] = [
        {
            artist: "Ornella Binni",
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Tom Byrom",
            art: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Ornella Binni",
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Tom Byrom",
            art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Ornella Binni",
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Tom Byrom",
            art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Ornella Binni",
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Tom Byrom",
            art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: "Vladimir Malyavko",
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },


    ]

    return works.slice(0,3)
}

export default function Archive() {
    const works = getARouteThatTakesAWhile()

    return (
        <Gallery works={works}/>
    )
}