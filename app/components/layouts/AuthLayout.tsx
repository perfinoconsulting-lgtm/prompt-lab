interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-16 bg-surface">
      <div className="w-full max-w-md">
        <div className="bg-canvas border border-hairline rounded-[16px] p-8 shadow-[rgba(15,15,15,0.06)_0px_4px_16px_0px]">
          {children}
        </div>
      </div>
    </div>
  );
}
