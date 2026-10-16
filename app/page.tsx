import Link from "next/link";
import { Footer, Header, ProductGrid } from "@/app/components/storefront";
import { products } from "@/app/data/products";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section id="hero" className="flex min-h-[600px] items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl w-full">
            <div className="max-w-xl rounded-3xl bg-white/75 p-8 backdrop-blur-sm shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Trade-in-offer</p>
              <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">Super value deals</h1>
              <h2 className="mt-2 text-3xl font-bold text-brand-600">On all products</h2>
              <p className="mt-4 text-lg text-slate-700">Save more with coupons and get up to 70% off on selected styles.</p>
              <Link href="/shop" className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">Shop now</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Featured products</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Summer collection</h2>
          </div>
          <ProductGrid items={products.slice(0, 8)} />
        </section>

        <section className="bg-brand-700 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-100">New arrivals</p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">Up to 70% on all shirts & accessories</h2>
            <Link href="/shop" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-700 hover:bg-slate-100">Explore more</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
