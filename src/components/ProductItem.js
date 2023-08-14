import React from 'react';
import ProductPage from './ProductPage';

const ProductItem = () => {
  const products = [
    {
      name: 'Product 1',
      image: 'shirt.jpg',
      price: 29.99,
      description: 'Description for Product 1.',
    },
    {
      name: 'Product 2',
      image: 'shirt.jpg',
      price: 39.99,
      description: 'Description for Product 2.',
    },
    {
      name: 'Product 3',
      image: 'shirt.jpg',
      price: 49.99,
      description: 'Description for Product 3.',
    },
    {
      name: 'Product 4',
      image: 'shirt.jpg',
      price: 59.99,
      description: 'Description for Product 4.',
    },
    // Add more products as needed
  ];

  return <ProductPage products={products} />;
};

export default ProductItem;
