import { CartOverview, Footer, Header } from "@/app/components/storefront";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-slate-50 py-8">
        <CartOverview />
      </main>
      <Footer />
    </>
  );
}
