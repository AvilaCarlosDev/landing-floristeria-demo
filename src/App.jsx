import { useState } from 'react'

function App() {
  const images = {
    hero: 'https://images.unsplash.com/photo-1563241527-3004b7be0ee0?w=1600&q=80&fit=crop',
    productos: [
      { img: 'https://images.unsplash.com/photo-1591195853828-11db79442529?w=500&q=80&fit=crop', name: 'Bouquet Aurora', price: 35 },
      { img: 'https://images.unsplash.com/photo-1507290439931-a861b5a3825c?w=500&q=80&fit=crop', name: 'Caja Rosé Deluxe', price: 58 },
      { img: 'https://images.unsplash.com/photo-1596627689914-2e78f836e6e9?w=500&q=80&fit=crop', name: 'Girasoles de Medianoche', price: 42 },
      { img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80&fit=crop', name: 'Desayuno Amor Bonito', price: 50 },
      { img: 'https://images.unsplash.com/photo-1563241527-300c2783e639?w=500&q=80&fit=crop', name: 'Ramo Primavera', price: 39 },
      { img: 'https://images.unsplash.com/photo-1582794543139-8ac92a9abf3d?w=500&q=80&fit=crop', name: 'Box Encanto Floral', price: 65 },
      { img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80&fit=crop', name: 'Orquídea Blanca Premium', price: 75 },
      { img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55300?w=500&q=80&fit=crop', name: 'Centro de Mesa Elegance', price: 85 },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header estilo Aflora */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="text-4xl">🌸</span>
              <div>
                <span className="text-xl font-bold text-gray-900">Flor de Luna</span>
                <p className="text-xs text-gray-500">Floristería Online</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="text-sm text-gray-700 hover:text-pink-600 transition">Inicio</a>
              <a href="#catalogo" className="text-sm text-gray-700 hover:text-pink-600 transition">Catálogo</a>
              <a href="#ocasiones" className="text-sm text-gray-700 hover:text-pink-600 transition">Ocasiones</a>
              <a href="#contacto" className="text-sm text-gray-700 hover:text-pink-600 transition">Contacto</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#carrito" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <span className="text-2xl">🛒</span>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
              </a>
              <a href="https://wa.me/584120000000" className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition text-sm">
                <span>💬</span> Hablar
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero estilo Aflora - limpio, blanco */}
        <section id="inicio" className="pt-32 pb-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Regala Flores en<br/>
                  <span className="text-pink-600">Venezuela</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Celebra lo que sientes diciendo "Te amo" de una nueva forma ¡con flores! Enviamos flores a domicilio en toda Venezuela.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#catalogo" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition inline-flex items-center gap-2">
                    <span>🌸</span> ¡Quiero elegir un arreglo!
                  </a>
                  <a href="https://wa.me/584120000000" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition border-2 border-gray-200">
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={images.hero} alt="Flores" className="w-full h-[500px] object-cover rounded-3xl shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🚚', title: 'Entrega el mismo día', desc: 'Pedidos antes de las 2 PM' },
                { icon: '💳', title: 'Pago seguro', desc: 'Múltiples métodos' },
                { icon: '🎨', title: 'Diseños únicos', desc: 'Hechos con amor' },
                { icon: '💬', title: 'Atención 24/7', desc: 'Siempre disponibles' },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catálogo estilo Aflora - cards blancas, precios verdes */}
        <section id="catalogo" className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
              <p className="text-lg text-gray-600">Elige tu arreglo floral favorito</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {images.productos.map((prod, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition">
                    <div className="aspect-square overflow-hidden relative">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition" aria-label="Añadir a favoritos">
                        <span className="text-xl">🤍</span>
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{prod.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-600">${prod.price}</span>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium transition text-sm">
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a href="#ver-mas" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold transition border-2 border-gray-200 hover:border-green-500 hover:text-green-500">
                Ver catálogo completo →
              </a>
            </div>
          </div>
        </section>

        {/* Sección personalizado */}
        <section className="py-20 bg-pink-50">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ¿Quieres un arreglo floral personalizado?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Nuestros floristas profesionales pueden ayudarte a crear algo único.
              </p>
              <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg transition">
                <span>💬</span> Sí, quiero hablar con un florista
              </a>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Más de veinte años uniendo personas a través de las flores
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-gray-600 text-lg leading-relaxed">
                  <p className="mb-6">
                    En Flor de Luna nos apasiona que las personas expresen su amor y aprecio a través de flores y regalos.
                  </p>
                  <p className="mb-6">
                    Comenzamos hace 10 años en Punto Fijo, vendiendo flores en un mercado popular y ahora trabajamos online llegando a todo Estado Falcón.
                  </p>
                  <p>
                    Cada arreglo es creado con flores frescas seleccionadas cada mañana, diseñadas por nuestras floristas expertas.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">+10</div>
                    <div className="text-gray-600 text-sm">Años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">+5K</div>
                    <div className="text-gray-600 text-sm">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">+20K</div>
                    <div className="text-gray-600 text-sm">Arreglos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Así Se Sintieron Nuestros Clientes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'María G.', text: '¡El arreglo más hermoso! Llegó puntual y mi mamá lloró de emoción.' },
                { name: 'Carlos R.', text: 'Excelente servicio. El detalle para mi esposa fue perfecto.' },
                { name: 'Ana P.', text: 'La atención por WhatsApp fue increíble. Me ayudaron a elegir.' },
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="text-2xl mb-4 text-yellow-500">★★★★★</div>
                  <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                  <div className="font-bold text-gray-900">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                ¿Listo para enviar flores?
              </h2>
              <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl transition">
                <span>💬</span> Haz tu pedido por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌸</span>
                <div>
                  <div className="text-xl font-bold">Flor de Luna</div>
                  <div className="text-xs text-gray-400">Floristería Online</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Floristería online premium para enviar flores y regalos a domicilio en Punto Fijo y toda Venezuela.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Ayuda</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Zonas de envío</a></li>
                <li><a href="#" className="hover:text-white transition">Métodos de pago</a></li>
                <li><a href="#" className="hover:text-white transition">Políticas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li>💬 +58 412-000-0000</li>
                <li>📍 Punto Fijo, Falcón</li>
                <li>🕒 Lun-Sáb: 9AM - 7PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 Flor de Luna. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/584120000000" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
