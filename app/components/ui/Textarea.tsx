interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({ label, error, id, className = "", ...props }: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-charcoal mb-2">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full px-4 py-3 bg-canvas border border-hairline-strong rounded-[8px] text-ink text-base placeholder:text-stone-notion focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical ${
          error ? "border-semantic-error focus:ring-semantic-error/20 focus:border-semantic-error" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-semantic-error text-sm mt-1">{error}</p>}
    </div>
  );
}
