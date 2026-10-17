import { Footer, Header, ProductGrid } from "@/app/components/storefront";
import { products } from "@/app/data/products";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-100">#Stayhome</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Save more with coupons & up to 70% off</h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ProductGrid items={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}
