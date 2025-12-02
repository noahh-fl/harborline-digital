import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex w-36 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-background px-6 py-2 text-center font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      <span className="relative flex w-full items-center justify-center">
        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-2">
          {text}
        </span>
        <span className="ml-1 flex h-5 items-center overflow-hidden transition-[width] duration-300 ease-out w-0 group-hover:w-5">
          <ArrowRight className="h-4 w-4 translate-x-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
        </span>
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-primary/90 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
