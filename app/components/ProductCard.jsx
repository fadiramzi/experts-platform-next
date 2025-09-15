
import Image from 'next/image'
import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="m-4 p-2 bg-zinc-400 rounded-lg hover:bg-white transition delay-500 duration-300 ease-in-out hover:scale-110">
            <p className="text-lg font-bold text-black">{product.title}</p>
            <span className="text-sm bg-green-300 text-black p-1 rounded-lg">{product.category}</span>
            <Image src={product.thumbnail} alt={product.title} width={250} height={250}/>
            <p> Discount: {product.discountPercentage}%</p>
            <p className="text-lg font-bold text-black">Price: ${product.price}</p>
          </div>
  )
}
