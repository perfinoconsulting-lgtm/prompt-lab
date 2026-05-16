interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, id, className = "", ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-charcoal mb-2">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 h-11 bg-canvas border border-hairline-strong rounded-[8px] text-ink text-base placeholder:text-stone-notion focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? "border-semantic-error focus:ring-semantic-error/20 focus:border-semantic-error" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-semantic-error text-sm mt-1">{error}</p>}
    </div>
  );
}
