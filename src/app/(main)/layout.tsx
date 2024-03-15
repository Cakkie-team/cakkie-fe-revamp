import { Container } from "@/components/icing/sideBarLayout/SideBarLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gray-50">
      <Container>{children}</Container>
    </div>
  );
}
