import Link from "next/link";
import { Footer, Header } from "@/app/components/storefront";

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Thank you</p>
          <h1 className="mt-4 text-4xl font-black text-slate-900">Your order is confirmed</h1>
          <p className="mt-4 text-lg text-slate-700">We will send order updates to your email and share shipping details soon.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">Back to home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
