import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex flex-col space-y-3">
            {/* style={{display: 'hidden', backgroundImage: 'https://media.istockphoto.com/id/827303250/photo/yellow-crayon-doodles-background-texture.jpg?s=612x612&w=0&k=20&c=7BBue-aeN9kG962xRh0r0R6sGYc2dmPY72lcjSZzQEM='}} */}
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export default Loading