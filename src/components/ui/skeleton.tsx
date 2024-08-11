import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      style={{display: 'hidden', backgroundImage: 'https://media.istockphoto.com/id/827303250/photo/yellow-crayon-doodles-background-texture.jpg?s=612x612&w=0&k=20&c=7BBue-aeN9kG962xRh0r0R6sGYc2dmPY72lcjSZzQEM='}}
      {...props}
    />
  )
}

export { Skeleton }
