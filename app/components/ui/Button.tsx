interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = "font-medium rounded-[8px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary hover:bg-primary-pressed text-white",
    secondary: "bg-transparent border border-hairline-strong text-charcoal hover:bg-surface",
    danger: "bg-semantic-error hover:bg-red-700 text-white",
    dark: "bg-ink-deep text-white hover:bg-charcoal",
    ghost: "bg-transparent text-charcoal hover:bg-surface",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-[18px] py-[10px] text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
