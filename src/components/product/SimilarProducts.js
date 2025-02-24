import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimilarProducts = () => {
  return (
    <section className="min-h-screen bg-white text-black py1 pt-[220px] myContainer">
      <div className="flex justify-between items-center border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-bold">Similar Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-700 p-4 rounded-xl transition transform hover:scale-105 hover:shadow-lg"
          >
            <Link
              href={`/shop/product/${product.id}`}
              className="w-full aspect-square rounded-lg relative overflow-hidden block"
            >
              <Image
                unoptimized
                fill
                src={product.image}
                alt={product.name}
                className="object-cover rounded-lg"
              />
            </Link>
            <Link href={`/shop/product/${product.id}`}>
              <h2 className="text-xl mt-4 font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </Link>
            <button
              className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              //   onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
