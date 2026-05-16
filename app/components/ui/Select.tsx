interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, error, id, options, className = "", ...props }: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-charcoal mb-2">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full px-4 h-11 bg-canvas border border-hairline-strong rounded-[8px] text-ink text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? "border-semantic-error focus:ring-semantic-error/20 focus:border-semantic-error" : ""
        } ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-semantic-error text-sm mt-1">{error}</p>}
    </div>
  );
}
