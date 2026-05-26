import React from 'react';

const ProductCard = ({ 
  product, 
  idKey = 'id',
  titleKey = 'nombre_producto',
  detailsKey = 'descripcion',
  typeKey = 'tipo',
  stockKey = 'existencias',
  priceKey = 'precio',
  imageKey = 'imagen_url'
}) => {
  // Imagen genérica mientras se configura el almacenamiento
  const placeholderImage = `https://picsum.photos/seed/${product[idKey]}/400/300`;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-content/5">
      <figure>
        <img 
          src={product[imageKey] || placeholderImage} 
          alt={product[titleKey]} 
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
      <div className="text-[15px] opacity-30 font-mono">ID: {product[idKey]}</div>
        <div className="flex justify-between items-start">
        
          <h2 className="card-title text-primary">{product[titleKey]}</h2>
          <div className="badge badge-secondary">{product[typeKey]}</div>
        </div>
        
        <p className="text-sm opacity-70 line-clamp-2">{product[detailsKey] || 'Sin descripción disponible.'}</p>
        
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase font-bold opacity-50">Stock: {product[stockKey]} unidades</span>
            <span className="text-3xl font-bold text-accent">${product[priceKey]}</span>
          </div>
          
        
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;