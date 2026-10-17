export type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  { id: 1, name: "Cartoon T-shirt", category: "Topwear", brand: "adidas", price: 7880, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80", description: "Soft cotton casual tee for everyday wear." },
  { id: 2, name: "Multicolor Shirt", category: "Topwear", brand: "calvin klein", price: 9899, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80", description: "Styled for a smart and modern wardrobe." },
  { id: 3, name: "Embroidered Pant", category: "Bottomwear", brand: "zara", price: 7899, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80", description: "Tailored comfort with embroidered detailing." },
  { id: 4, name: "Flower Crop Top", category: "Women", brand: "zara", price: 7799, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80", description: "A vibrant crop top with easy movement." },
  { id: 5, name: "Sky Blue Shirt", category: "Formal", brand: "levis", price: 7779, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80", description: "Lightweight shirt with premium finish." },
  { id: 6, name: "Casual Shirt", category: "Topwear", brand: "zara", price: 7575, image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80", description: "Everyday casual style built for comfort." },
  { id: 7, name: "Flower Shirt", category: "Women", brand: "zara", price: 8499, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", description: "Bright pattern with a clean silhouette." },
  { id: 8, name: "Casual Shirt", category: "Topwear", brand: "armani exchange", price: 9996, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80", description: "A refined modern style with crisp detail." },
  { id: 9, name: "Check Shirt", category: "Formal", brand: "allen solly", price: 9868, image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&w=900&q=80", description: "Versatile checked shirt for smart occasions." },
  { id: 10, name: "White Shirt", category: "Formal", brand: "adidas", price: 4558, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", description: "Classic clean white shirt with premium fit." },
  { id: 11, name: "Cartoon Tee", category: "Topwear", brand: "adidas", price: 4578, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80", description: "Bold graphic look with easy styling." },
  { id: 12, name: "Denim Shorts", category: "Bottomwear", brand: "nike", price: 7598, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80", description: "Comfort-first denim shorts for summer days." },
];
