import { Footer, Header } from "@/app/components/storefront";

export default function SignupPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-200">Sign up</p>
            <h1 className="mt-3 text-4xl font-black">Create your account</h1>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Username</label>
              <input type="text" className="w-full rounded-2xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-brand-400" placeholder="Enter Username" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input type="email" className="w-full rounded-2xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-brand-400" placeholder="Email" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Mobile Number</label>
              <input type="tel" className="w-full rounded-2xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-brand-400" placeholder="Mobile Number" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Country</label>
              <select className="w-full rounded-2xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-brand-400" defaultValue="India">
                <option>India</option>
                <option>United States</option>
                <option>Africa</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
              <input type="password" className="w-full rounded-2xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-brand-400" placeholder="Enter Password" required />
            </div>
            <button type="submit" className="w-full rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">Sign up</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
