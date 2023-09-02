import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getProducts from '../../utils/data/productData';

export default function ViewProduct() {
  const [productDetails, setProductDetails] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getProducts(id).then(setProductDetails);
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {productDetails.name} <br />
            {productDetails.description}
          </h5>
          Price: {productDetails.price}
          <hr />
        </div>
      </div>
    </>
  );
}
