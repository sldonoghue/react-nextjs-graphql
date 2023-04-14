import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import Product from "./Product";
import { perPage } from "../config";

//the variables given are related to the pagination
const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: { 
      skip: page * perPage - perPage, 
      first: perPage
    },
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ProductListStyles>
        {data.allProducts.map((product) => (
           <Product key={product.id} product={product} />
        ))}
      </ProductListStyles>
    </div>
  );
}