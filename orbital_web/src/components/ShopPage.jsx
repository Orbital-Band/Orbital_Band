import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Importa el cliente de Supabase
import ProductCard from './ProductCard';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Consultar la tabla "Existencias_Merch"
        const { data, error } = await supabase
          .from('Existencias_merch')
          .select('*'); // Selecciona todas las columnas

        if (error) {
          throw error;
        }

        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err.message);
        setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="hero min-h-screen bg-base-300 py-20">
        <div className="hero-content text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-xl">Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero min-h-screen bg-base-300 py-20">
        <div className="hero-content text-center">
          <p className="text-error text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-base-300 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-10">Nuestra Tienda</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                idKey="id" 
                titleKey="Title"
                detailsKey="Detalles"
                typeKey="Tipo"
                stockKey="Existencias"
                priceKey="Precio"
              />
            ))
          ) : (
            <p className="text-center text-xl col-span-full">No se han encontrado productos.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;