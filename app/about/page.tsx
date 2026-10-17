import Link from "next/link";
import { Footer, Header } from "@/app/components/storefront";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-brand-700 py-20 text-center text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-100">#KnowUs</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Meet our team</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Team" className="h-full w-full rounded-3xl object-cover shadow-soft" />
          <div className="space-y-5">
            <h2 className="text-3xl font-black text-slate-900">Who are we?</h2>
            <p className="text-lg leading-8 text-slate-700">We are students building a modern ecommerce project to practice product layout, cart flow, and user experience design. This storefront brings together front-end skills with a clean shopping experience.</p>
            <p className="text-lg leading-8 text-slate-700">To learn more or connect with the team, please reach out through the contact page.</p>
            <Link href="/contact" className="inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">Contact us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
