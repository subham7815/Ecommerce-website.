import Link from "next/link";
import { Footer, Header } from "@/app/components/storefront";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h1 className="text-3xl font-black text-slate-900">Checkout</h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                  <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                  <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="you@example.com" required />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Address</label>
                <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Country</label>
                  <select className="w-full rounded-2xl border border-slate-300 px-4 py-3" defaultValue="India">
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">State</label>
                  <select className="w-full rounded-2xl border border-slate-300 px-4 py-3" defaultValue="Odisha">
                    <option>Odisha</option>
                    <option>California</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Zip</label>
                  <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-bold text-slate-900">Payment</h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-3"><input type="radio" name="payment" defaultChecked /> Credit card</label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-3"><input type="radio" name="payment" /> Debit card</label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-3"><input type="radio" name="payment" /> UPI</label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Name on card</label>
                    <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Card number</label>
                    <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Expiration</label>
                    <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">CVV</label>
                    <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3" required />
                  </div>
                </div>
              </div>

              <Link href="/order" className="inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">Confirm order</Link>
            </form>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">Order summary</h3>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex justify-between"><span>Cart subtotal</span><span>₹23,997</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
                <div className="flex justify-between border-t border-slate-200 pt-3 text-base font-bold text-slate-900"><span>Total</span><span>₹23,997</span></div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
