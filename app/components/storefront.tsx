"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/app/data/products";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function Header() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const raw = window.localStorage.getItem("cityshop-cart");
    const items = raw ? JSON.parse(raw) : [];
    setCount(items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0));
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/cart", label: "Cart" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-lg font-bold text-white">C</div>
          <div>
            <p className="text-lg font-black uppercase tracking-[0.2em] text-slate-900">City Shop</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-brand-600" : "text-slate-700 hover:text-brand-600"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600">
          Cart
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{count}</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-white">City Shop</h3>
          <p className="max-w-sm text-sm text-slate-300">A modern online storefront demo built with Next.js, React, TypeScript and Tailwind CSS.</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Support</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function readCart(): Array<{ id: number; quantity: number }> {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem("cityshop-cart");
  return raw ? JSON.parse(raw) : [];
}

function saveCart(items: Array<{ id: number; quantity: number }>) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("cityshop-cart", JSON.stringify(items));
  }
}

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const addToCart = () => {
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, quantity: 1 });
    }

    saveCart(cart);
    router.push("/cart");
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-brand-600">{currency.format(product.price)}</p>
          <button onClick={addToCart} className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">Add to cart</button>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items?: Product[] }) {
  const list = items ?? products;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function CartOverview() {
  const [items, setItems] = useState<Array<{ id: number; quantity: number }>>([]);

  useEffect(() => {
    setItems(readCart());
  }, []);

  const cartItems = useMemo(() => {
    return items.map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean) as Array<Product & { quantity: number }>;
  }, [items]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 ? 0 : 0;
  const total = subtotal + shipping;

  const updateQuantity = (id: number, delta: number) => {
    const next = items
      .map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)
      .filter((item) => item.quantity > 0);

    setItems(next);
    saveCart(next);
  };

  const removeItem = (id: number) => {
    const next = items.filter((item) => item.id !== id);
    setItems(next);
    saveCart(next);
  };

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-5xl rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
        <p className="mt-3 text-slate-600">Browse the collection and add a few favorites to get started.</p>
        <Link href="/shop" className="mt-6 inline-flex rounded-full bg-brand-500 px-5 py-2.5 font-semibold text-white hover:bg-brand-600">Continue shopping</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="space-y-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:items-center">
              <img src={item.image} alt={item.name} className="h-28 w-28 rounded-2xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.brand}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-sm font-medium text-red-500">Remove</button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-slate-200">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 text-lg">-</button>
                    <span className="min-w-10 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 text-lg">+</button>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{currency.format(item.price * item.quantity)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
          <h3 className="text-2xl font-bold text-slate-900">Cart total</h3>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <div className="flex justify-between"><span>Subtotal</span><span>{currency.format(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : currency.format(shipping)}</span></div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-base font-bold text-slate-900"><span>Total</span><span>{currency.format(total)}</span></div>
          </div>
          <Link href="/checkout" className="mt-6 flex w-full justify-center rounded-full bg-brand-500 px-4 py-3 font-semibold text-white hover:bg-brand-600">Checkout</Link>
        </aside>
      </div>
    </section>
  );
}
