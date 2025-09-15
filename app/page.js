import Image from "next/image";
import ProductCard from "./components/ProductCard";


export default async function Home() {

  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const products = data.products;
  
  return (
    <div className="bg-gray-900">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
