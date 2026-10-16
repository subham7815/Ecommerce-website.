# Ecommerce Website

A static ecommerce storefront project built with HTML and CSS, with Bootstrap and jQuery loaded from external CDNs on some pages.

## Run locally

You can open `main.html` directly in a browser, or serve the project over HTTP with Python:

1. Open PowerShell in the project folder:

   ```powershell
   cd D:\MCP_server\Ecommerce-website
   ```

2. Start the local server:

   ```powershell
   py -m http.server 8000
   ```

   If the `py` command is unavailable but Python is installed, use:

   ```powershell
   python -m http.server 8000
   ```

3. Open [http://localhost:8000/main.html](http://localhost:8000/main.html) in your browser.
4. Stop the server with **Ctrl+C** in PowerShell.

An internet connection is needed for the pages' externally hosted Bootstrap and jQuery resources.

## Pages

- `main.html` — home page and featured products
- `shop.html` — product catalog
- `cart.html` — cart page
- `bill.html` — checkout form
- `order.html` — order confirmation page
- `signup.html` — signup form
- `about.html` — project information
- `contact.html` — contact information

## Project structure

```text
Ecommerce-website/
├── assets/
│   ├── css/
│   │   └── main_style.css
│   └── images/
│       └── storefront, product, and page images
├── about.html
├── bill.html
├── cart.html
├── contact.html
├── main.html
├── order.html
├── shop.html
└── signup.html
```

Keep page files in the project root, stylesheets in `assets/css/`, and image files in `assets/images/`. HTML pages reference images with paths such as `assets/images/logo1.png`; CSS image paths are relative to the stylesheet, for example `../images/hero.jpg`.

## Current limitations

This is a front-end demonstration, not a complete ecommerce system. The cart, signup, coupon, and checkout flows are not connected to a backend, and payment is not processed. Do not enter real passwords or payment details.
