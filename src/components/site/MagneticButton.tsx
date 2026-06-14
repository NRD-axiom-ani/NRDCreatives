import { ButtonHTMLAttributes, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  strength?: number;
}

export const MagneticButton = ({
  children,
  className,
  variant = "primary",
  strength = 0.35,
  ...rest
}: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(variant === "primary" ? "btn-primary" : "btn-ghost", "will-change-transform", className)}
      {...rest}
    >
      {children}
    </button>
  );
};
