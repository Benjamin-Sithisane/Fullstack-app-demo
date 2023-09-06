import { useState, useEffect, useRef } from "react";

function Products() {
    const[product, setProducts] = useState([])
    const { current: displayProduct } = useRef(['image', 'title', 'price'])

    useEffect(() => {
        products()
    }, [displayProduct])

    const products = async () => {
        const res = await fetch('https://fakestoreapi.com/products/1')

        setProducts(await res.json())
    } 

    console.log(products())

  return (
    <div>
        <img src={product.image} alt="" />
        <div className="product-info">
            <h2>"${product.title}"</h2>
            <h3>${product.price}</h3>
        </div>
    </div>
  )
}

export default Products