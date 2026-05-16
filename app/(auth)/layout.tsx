import AuthLayout from "@/app/components/layouts/AuthLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
