import React from 'react'
import { getProducts } from '../../api'
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { ProductsStyled } from '../../components/styles/products.styled';
import ProductCard from '../../components/ProductCard';
import requireAuth from '../../utils';

export const productsLoader = async () => {
    await requireAuth();
    return await getProducts();
}

export default function Products() {
    const loaderData = useLoaderData();
    const products = loaderData.map(item => {
      return {...item, amount: 1};
    });

    const [searchParams, setSearchParams] = useSearchParams();

    const filterData = searchParams.get('category');
    const userName = searchParams.get('name');
    const displayProducts = filterData ? products.filter((product) => product.category === filterData) : products

    //id, title, price, rating{rate, count}, image, description, category
  return (
    <ProductsStyled>
          {userName && <h1>Welcome {userName}</h1>}
          <h1>Explore our products</h1>
          <h3>Search by catagory: </h3>
          <nav>
              {filterData && <div onClick={() => setSearchParams({})}>All</div>}
              <div onClick={() =>setSearchParams({category: "men's clothing"})}>Men's clothing</div>
              <div onClick={() => setSearchParams({category: "jewelery"})}>Jewelery</div>
              <div onClick={() => setSearchParams({category: "electronics"})}>Electronics</div>
              <div onClick={() => setSearchParams({category: "women's clothing"})}>Women's Cloting</div>

          </nav>
        <div>
        { displayProducts.map(product => {
                return <ProductCard key={product.id} {...product} state={{search: searchParams.toString()}} />
            })}

        </div>
    </ProductsStyled>
  )
}
