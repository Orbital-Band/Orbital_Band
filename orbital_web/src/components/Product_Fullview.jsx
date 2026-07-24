import React from 'react';

const Product_Fullview = ({
  product,
  modalId = 'product_fullview_modal',
  idKey = 'id',
  titleKey = 'nombre_producto',
  detailsKey = 'descripcion',
  typeKey = 'tipo',
  stockKey = 'existencias',
  priceKey = 'precio',
  imageKey = 'imagen_url',
  onAddToCart
}) => {
  if (!product) return null;

  // Imagen genérica si no hay URL configurada
  const img1 = product[imageKey] || `https://picsum.photos/seed/${product[idKey]}-1/600/400`;
  const img2 = `https://picsum.photos/seed/${product[idKey]}-2/600/400`;
  const img3 = `https://picsum.photos/seed/${product[idKey]}-3/600/400`;
  const img4 = `https://picsum.photos/seed/${product[idKey]}-4/600/400`;

  return (
    <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-6xl p-5 overflow-hidden bg-base-100 border border-base-content/10 shadow-2xl rounded-2xl">
        <form method="dialog">
          {/* Botón para cerrar en la esquina superior derecha */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10 bg-base-100/80 hover:bg-base-100 text-base-content backdrop-blur-sm shadow-md">✕</button>
        </form>

        <div className="flex flex-col lg:flex-row min-h-[550px]">
          {/* Columna izquierda: Imagen en tamaño grande */}
          <div className="lg:w-1/2 relative bg-base-200 flex items-center justify-center overflow-hidden group">
            <figure className="hover-gallery ">
              <img src={img1} alt={`${product[titleKey]} 1`} />
              <img src={img2} alt={`${product[titleKey]} 2`} />
              <img src={img3} alt={`${product[titleKey]} 3`} />
              <img src={img4} alt={`${product[titleKey]} 4`} />
            </figure>
            <div className="absolute top-4 left-4">
              <span className="badge badge-secondary py-3 px-4 font-semibold text-xs uppercase tracking-wider shadow-lg">
                {product[typeKey]}
              </span>
            </div>
          </div>

          {/* Columna derecha: Detalles del producto */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[21px] font-mono opacity-40">ID: {product[idKey]}</div>
              <h2 className="text-3xl font-extrabold text-primary leading-tight">
                {product[titleKey]}
              </h2>

              <div className="divider my-1"></div>

              <p className="text-base-content/85 leading-relaxed text-sm py-2">
                {product[detailsKey] || 'Sin descripción disponible.'}
              </p>

              <div className="stats bg-base-200/50 shadow-sm border border-base-content/5 w-full mt-4">
                <div className="stat py-3 px-4">
                  <div className="stat-title text-xs uppercase font-bold opacity-50">Stock Disponible</div>
                  <div className="stat-value text-lg text-secondary">{product[stockKey]} unidades</div>
                </div>
              </div>
            </div>

            <div className="mt-15 flex items-center justify-between gap-8 pt-4 border-t border-base-content/10">
              <div className="flex flex-col">
                <span className="text-sm uppercase font-bold opacity-50">Precio</span>
                <span className="text-4xl font-black text-accent">${product[priceKey]}</span>
              </div>

              <button
                className="btn btn-primary btn-sl shadow-lg hover:shadow-primary/20 transition-all duration-300 px-8"
                onClick={() => {
                  if (onAddToCart) onAddToCart(product);
                  document.getElementById(modalId).close();
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Soporte para cerrar al dar clic fuera del modal */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Product_Fullview;
