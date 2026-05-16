interface BadgeProps {
  variant?: "primary" | "success" | "warning" | "danger" | "tag-purple" | "tag-green" | "tag-orange";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "primary", children, className = "" }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-white",
    success: "bg-tint-mint text-brand-green",
    warning: "bg-tint-peach text-brand-orange",
    danger: "bg-tint-rose text-semantic-error",
    "tag-purple": "bg-tint-lavender text-brand-purple-800",
    "tag-green": "bg-tint-mint text-brand-green",
    "tag-orange": "bg-tint-peach text-brand-orange",
  };

  return (
    <span className={`inline-block px-[10px] py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
