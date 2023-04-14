import Head from 'next/head';
import Link from 'next/link';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

//KEYSTONE allows us to use meta queries to get the total number of items in the database
export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination ({ page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const count = data._allProductsMeta.count;
  //console.log(count);
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Store - Page {page} of {pageCount}</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        {/* aria tags need to be in anchor tags - can't be passed directly in Link */}
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>Page {page} of {pageCount}</p>
      <p>{count} Total Items</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}