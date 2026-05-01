import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const products = {
    1: { name: 'Stamping Foils', category: 'Hot Stamping' },
    2: { name: 'Multi Color Hot Stamping Foil', category: 'Hot Stamping' },
    3: { name: 'Polypropylene Hot Stamping Foil', category: 'Hot Stamping' },
    4: { name: 'Flower Hot Stamping Foil', category: 'Hot Stamping' },
    5: { name: 'Colored Hot Stamping Foil', category: 'Hot Stamping' },
    6: { name: 'Cold Stamping Foil', category: 'Cold Stamping' },
    7: { name: 'Garment Foil', category: 'Garment' },
    8: { name: 'Textile Foil', category: 'Garment' },
    9: { name: 'Printed Textile Foil', category: 'Garment' },
    13: { name: 'Cold Stamping Foil', category: 'Cold Stamping' },
    14: { name: 'Digital Stamping Foil', category: 'Digital' },
    15: { name: 'Digital Foil - Packaging, Magazines, Boxes, Books', category: 'Digital' },
    16: { name: 'Digital Foil - Certificates, Crafting', category: 'Digital' },
  };

  const product = products[id];

  return (
    <div className="product-details-page">
      <div className="container py-5">
        <h1>{product ? product.name : 'Product Not Found'}</h1>
        {product ? (
          <div className="product-info">
            <p><strong>Category:</strong> {product.category}</p>
            <p>Product details coming soon...</p>
            <button className="btn btn-primary">Inquire Now</button>
          </div>
        ) : (
          <p>The product you're looking for doesn't exist.</p>
        )}
      </div>
    </div>
  );
}
