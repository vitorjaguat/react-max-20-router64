import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
