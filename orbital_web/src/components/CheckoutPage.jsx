import React, { useState } from 'react';

const CheckoutPage = ({ cart, updateQuantity, onNavigate, clearCart }) => {
  const [isPaid, setIsPaid] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.Precio * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppLink = () => {
    let message = "Hola, quiero hacer un pedido:\n\n🛍️ *.:Detalle del Pedido:.*\n";
    cart.forEach(item => {
      const product = item.product;
      const itemSubtotal = product.Precio * item.quantity;
      message += `• *${item.quantity}x* ${product.Title} ($${product.Precio} c/u) - Subtotal: $${itemSubtotal}\n`;
    });
    message += `\n💵 *Total:* $${subtotal}`;
    message += `\n¿Podría calcular mi envío por favor?`;
    return `https://wa.me/525542454471?text=${encodeURIComponent(message)}`;
  };

  const handlePay = () => {
    setIsPaid(true);
  };

  const handleSuccessClose = () => {
    clearCart();
    onNavigate('shop');
  };

  if (isPaid) {
    return (
      <div className="w-full bg-base-300 min-h-screen py-12 flex items-center justify-center">
        <div className="card bg-base-100 shadow-2xl p-8 max-w-md w-full text-center border border-success/20">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-success/15 rounded-full flex items-center justify-center text-success animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-success mb-2">Enviar pedido</h2>
          <p className="text-base-content/70 mb-8">
            Tu pedido se enviará por whatsapp. ¡Gracias por apoyar a la banda! Continúa en el chat.
          </p>
          <a href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSuccessClose}
            className="btn btn-success btn-block">
            Enviar pedido por Whatsapp
          </a>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="w-full bg-base-300 min-h-screen py-16 flex items-center justify-center">
        <div className="card bg-base-100 shadow-xl p-10 max-w-lg w-full text-center border border-base-content/5">
          <div className="flex justify-center mb-6 text-base-content/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
          <p className="text-base-content/60 mb-8">
            Parece que aún no has agregado ningún producto a tu carrito de compras.
          </p>
          <button className="btn btn-primary" onClick={() => onNavigate('shop')}>
            Ir a la Tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-base-300 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <button className="btn btn-ghost btn-circle" onClick={() => onNavigate('shop')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h1 className="text-4xl font-extrabold">Finalizar Compra</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List of items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-base-100 rounded-2xl p-6 shadow-md border border-base-content/5">
              <h2 className="text-xl font-bold mb-6 flex justify-between items-center">
                <span>Artículos en tu carrito</span>
                <span className="badge badge-secondary">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
              </h2>

              <div className="divide-y divide-base-content/10">
                {cart.map((item) => {
                  const product = item.product;
                  const placeholderImage = `https://picsum.photos/seed/${product.id}/150/150`;
                  return (
                    <div key={product.id} className="flex gap-4 py-4 first:pt-0 last:pb-0 items-center">
                      <img
                        src={product.imagen_url || placeholderImage}
                        alt={product.Title}
                        className="w-20 h-20 object-cover rounded-xl bg-base-200"
                      />

                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg text-primary">{product.Title}</h3>
                            <span className="badge badge-sm badge-outline mt-1">{product.Tipo}</span>
                          </div>
                          <span className="font-bold text-lg">${product.Precio * item.quantity}</span>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          {/* Quantity selector */}
                          <div className="join border border-base-content/10">
                            <button
                              className="btn btn-xs join-item"
                              onClick={() => updateQuantity(product.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="px-4 text-sm font-semibold flex items-center bg-base-100">{item.quantity}</span>
                            <button
                              className="btn btn-xs join-item"
                              onClick={() => updateQuantity(product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>

                          {/* Delete button */}
                          <button
                            className="btn btn-ghost btn-xs text-error"
                            onClick={() => updateQuantity(product.id, 0)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-base-100 rounded-2xl p-6 shadow-md border border-base-content/5">
              <h2 className="text-xl font-bold mb-6">Resumen de Orden</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-70">Subtotal</span>
                  <span className="font-semibold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Envío</span>
                  <span className="text-success font-semibold">Por definir</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Impuestos</span>
                  <span className="font-semibold">$0</span>
                </div>

                <div className="divider"></div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-accent text-2xl font-black">${subtotal}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className="btn btn-primary btn-block btn-lg shadow-lg hover:shadow-primary/20 transition-all duration-300" onClick={handlePay}>
                  Enviar Orden                </button>
                <button className="btn btn-outline btn-block" onClick={() => onNavigate('shop')}>
                  Seguir Comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
