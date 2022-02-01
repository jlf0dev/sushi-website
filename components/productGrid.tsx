import { FC } from "react"
import Image from "next/image"
import React from "react"


interface ProductProps {
  product: Product,
}

interface ProductListProps {
  products: Product[]
}

export type Product = {
  image: string | StaticImageData,
  name: string,
  description: string,
  price: string
}


const ProductItem:FC<ProductProps> = ({product}) => {
  return (
    <div className="flex gap-6">
      <div className="flex-none">
        <Image src={product.image} width={115} height={115} />
      </div>
      <div className="basis-1/2 text-left">
        <h4 className="text-xl mb-3">{product.name}</h4>
        <p className="font-light text-left">{product.description}</p>
      </div>
      <div className="basis-1/4 text-right text-xl">
        {product.price}
      </div>
    </div>
  )
}

const ProductGrid:FC<ProductListProps> = ({products}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      { products.map((product, index) =>
          <React.Fragment key={index}>
          <ProductItem product={product} />
        </React.Fragment>
      )}
    </div>
    )
}

export { ProductItem, ProductGrid}