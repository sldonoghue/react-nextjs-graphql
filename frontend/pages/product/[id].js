export default function ProductsPage({ query }) {
  return (
    <div>
      <Pagination page={parseFloat(query.page) || 1} />
      <Products />
    </div>
  );
}