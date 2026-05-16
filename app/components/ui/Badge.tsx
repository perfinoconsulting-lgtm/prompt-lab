interface BadgeProps {
  variant?: "primary" | "success" | "warning" | "danger";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "primary",
  children,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-blue-900 text-blue-100",
    success: "bg-green-900 text-green-100",
    warning: "bg-yellow-900 text-yellow-100",
    danger: "bg-red-900 text-red-100",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
