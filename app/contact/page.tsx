import { Footer, Header } from "@/app/components/storefront";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-900 py-20 text-center text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-100">#Let&apos;s talk</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Leave a message, we love to hear from you</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Location map" className="h-full w-full rounded-3xl object-cover shadow-soft" />
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-600">Get in touch</p>
            <h2 className="text-3xl font-black text-slate-900">Visit one of our locations or contact us today</h2>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-lg font-semibold text-slate-900">Head Office</p>
              <p className="mt-3 text-slate-700">ITER College Rd, Jagmohan Nagar, Bhubaneswar, Odisha, PIN-751030</p>
              <p className="mt-3 text-slate-700">Phone: +91 84888899922</p>
              <p className="mt-3 text-slate-700">Email: cityshop.official@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-slate-900">Send a message</h3>
            <form className="mt-6 space-y-4">
              <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-brand-500" />
              <textarea rows={5} placeholder="Your message" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" />
              <button type="submit" className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
