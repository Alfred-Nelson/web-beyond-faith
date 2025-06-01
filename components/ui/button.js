import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer hover:scale-95 transition ease-out",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-accent text-accent bg-transparent",
        accent: "border border-accent bg-accent text-accent-foreground",
        link: "text-primary bg-transparent"
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      shape: {
        "curved-box": "rounded-md",
        "rounded": "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded"
    },
  }
)

/**
 * 
 * @param {React.ComponentProps<"button"> & import("class-variance-authority").VariantProps<typeof buttonVariants> & { asChild?: boolean }} param0 
 * @returns 
 */
function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
