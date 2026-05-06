import { useState } from 'react'

function App() {
  const images = {
    hero: 'https://images.unsplash.com/photo-1563241527-3004b7be0ee0?w=1600&q=80',
    productos: [
      { img: 'https://images.unsplash.com/photo-1591195853828-11db79442529?w=500&q=80', name: 'Bouquet Aurora', category: 'Rosas', price: 35 },
      { img: 'https://images.unsplash.com/photo-1507290439931-a861b5a3825c?w=500&q=80', name: 'Caja Rosé Deluxe', category: 'Cajas', price: 58 },
      { img: 'https://images.unsplash.com/photo-1596627689914-2e78f836e6e9?w=500&q=80', name: 'Girasoles de Medianoche', category: 'Girasoles', price: 42 },
      { img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80', name: 'Desayuno Amor Bonito', category: 'Desayunos', price: 50 },
      { img: 'https://images.unsplash.com/photo-1563241527-300c2783e639?w=500&q=80', name: 'Ramo Primavera', category: 'Ramos', price: 39 },
      { img: 'https://images.unsplash.com/photo-1582794543139-8ac92a9abf3d?w=500&q=80', name: 'Box Encanto Floral', category: 'Cajas', price: 65 },
      { img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80', name: 'Orquídea Blanca Premium', category: 'Orquídeas', price: 75 },
      { img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55300?w=500&q=80', name: 'Centro de Mesa Elegance', category: 'Centros', price: 85 },
    ],
    ocasiones: [
      { img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&q=80', name: 'Cumpleaños', desc: 'Sorprende en su día' },
      { img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80', name: 'Aniversario', desc: 'Celebra su amor' },
      { img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&q=80', name: 'Amor', desc: 'Di "te amo"' },
      { img: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=500&q=80', name: 'Condolencias', desc: 'Acompaña' },
      { img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80', name: 'Nacimiento', desc: 'Bienvenida' },
      { img: 'https://images.unsplash.com/photo-1469334031218-e38a10d97897?w=500&q=80', name: 'Agradecimiento', desc: 'Gracias' },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="text-4xl">🌸</span>
              <div>
                <span className="text-2xl font-bold text-pink-600">Flor de Luna</span>
                <p className="text-xs text-gray-500 uppercase">Floristería Online</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#inicio" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Inicio</a>
              <a href="#catalogo" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Catálogo</a>
              <a href="#ocasiones" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Ocasiones</a>
              <a href="#personalizados" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Personalizados</a>
              <a href="#testimonios" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Testimonios</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/584120000000" className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition">
                <span>💬</span> Hablar
              </a>
              <a href="#catalogo" className="bg-pink-600 hover:bg-pink-700 text-white px-7 py-2.5 rounded-full font-semibold transition shadow-md">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero - CENTRADO REAL */}
        <section id="inicio" className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                Envía flores que<br/>
                <span className="text-pink-600">hablan por ti</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Arreglos florales, desayunos y detalles personalizados entregados el mismo día en Punto Fijo, Estado Falcón.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="#catalogo" className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-full font-bold text-xl transition shadow-xl inline-flex items-center justify-center">
                  Ver catálogo
                </a>
                <a href="https://wa.me/584120000000" className="bg-white hover:bg-gray-50 text-pink-600 px-10 py-5 rounded-full font-bold text-xl transition border-2 border-pink-200 inline-flex items-center justify-center gap-2">
                  <span>💬</span> Hablar con florista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: '🚚', title: 'Entrega el mismo día', desc: 'Pedidos antes de las 2 PM' },
                { icon: '🎨', title: 'Diseños personalizados', desc: 'Creamos algo único' },
                { icon: '💳', title: 'Pago seguro', desc: 'Múltiples métodos' },
                { icon: '💬', title: 'Atención WhatsApp', desc: 'Respuesta inmediata' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catálogo - CENTRADO */}
        <section id="catalogo" className="py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-widest">Nuestras Creaciones</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-6">Catálogo Destacado</h2>
              <p className="text-xl text-gray-600">
                Cada arreglo es único, hecho con flores frescas y mucho amor
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {images.productos.map((prod, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                  <div className="aspect-square overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-8">
                    <span className="text-xs text-pink-600 font-bold uppercase tracking-wider">{prod.category}</span>
                    <h3 className="text-xl font-bold mt-3 mb-4 text-gray-900">{prod.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-black text-pink-600">${prod.price}</span>
                      <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition">
                        Añadir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalizados */}
        <section id="personalizados" className="py-24 bg-pink-600 text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black mb-8">
                  ¿Quieres un arreglo personalizado?
                </h2>
                <p className="text-xl text-white/90 mb-10">
                  Creamos arreglos únicos para ocasiones especiales. Cuéntanos tu idea y la haremos realidad.
                </p>
                <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-xl">
                  <span>💬</span> Diseñar mi arreglo
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square bg-white/20 rounded-3xl flex items-center justify-center text-7xl backdrop-blur-sm">🎨</div>
                <div className="aspect-square bg-white/20 rounded-3xl flex items-center justify-center text-7xl backdrop-blur-sm">💐</div>
                <div className="aspect-square bg-white/20 rounded-3xl flex items-center justify-center text-7xl backdrop-blur-sm">✨</div>
                <div className="aspect-square bg-white/20 rounded-3xl flex items-center justify-center text-7xl backdrop-blur-sm">💝</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ocasiones - CENTRADO */}
        <section id="ocasiones" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-widest">Para Cada Momento</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-6">Ocasiones Especiales</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
              {images.ocasiones.map((ocasion, i) => (
                <a key={i} href="#" className="group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5 relative">
                    <img src={ocasion.img} alt={ocasion.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{ocasion.name}</h3>
                      <p className="text-sm text-white/80">{ocasion.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Historia - CENTRADO */}
        <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-widest">Nuestra Historia</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-10">
                Más de 10 años creando momentos
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Flor de Luna nació en 2016 con una misión simple: ayudar a las personas a expresar lo que sienten a través de flores. Lo que comenzó como un pequeño taller, hoy es la floristería online más querida de Estado Falcón.
              </p>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Cada arreglo es creado con flores frescas seleccionadas cada mañana, diseñadas por nuestras floristas expertas.
              </p>
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <div className="text-5xl font-black text-pink-600 mb-4">+10</div>
                  <div className="text-gray-600 text-lg">Años</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-pink-600 mb-4">+5K</div>
                  <div className="text-gray-600 text-lg">Clientes</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-pink-600 mb-4">+20K</div>
                  <div className="text-gray-600 text-lg">Arreglos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios - CENTRADO */}
        <section id="testimonios" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-widest">Lo Que Dicen</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-6">Clientes Felices</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { name: 'María G.', text: '¡El arreglo más hermoso! Llegó puntual y mi mamá lloró de emoción. Definitivamente volveré a pedir.', stars: '★★★★★' },
                { name: 'Carlos R.', text: 'Excelente servicio. El detalle para mi esposa fue perfecto. La florista me ayudó a elegir.', stars: '★★★★★' },
                { name: 'Ana P.', text: 'La atención por WhatsApp fue increíble. Me ayudaron a elegir el arreglo ideal para mi presupuesto.', stars: '★★★★★' },
              ].map((t, i) => (
                <div key={i} className="bg-gradient-to-br from-pink-50 to-rose-50 p-10 rounded-3xl">
                  <div className="text-3xl mb-6 text-yellow-500">{t.stars}</div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">"{t.text}"</p>
                  <div className="font-bold text-pink-600 text-xl">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final - CENTRADO */}
        <section className="py-24 bg-pink-600 text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl lg:text-6xl font-black mb-8">¿Listo para sorprender?</h2>
              <p className="text-2xl text-white/90 mb-12">
                Haz tu pedido por WhatsApp y recibe tu arreglo floral el mismo día en Punto Fijo.
              </p>
              <a href="https://wa.me/584120000000" className="inline-flex items-center gap-4 bg-white text-pink-600 px-12 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition shadow-2xl">
                <span>💬</span> Haz tu pedido
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🌸</span>
                <div>
                  <div className="text-2xl font-bold">Flor de Luna</div>
                  <div className="text-xs text-gray-400 uppercase">Floristería Online</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 text-lg max-w-md">
                Floristería online premium para enviar flores y regalos personalizados a domicilio en Punto Fijo.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-3xl hover:scale-125 transition">📷</a>
                <a href="#" className="text-3xl hover:scale-125 transition">📘</a>
                <a href="#" className="text-3xl hover:scale-125 transition">🎵</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-8">Ayuda</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">Zonas de envío</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Métodos de pago</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Políticas</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-8">Contacto</h3>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li>💬 +58 412-000-0000</li>
                <li>📍 Punto Fijo, Falcón</li>
                <li>🕒 Lun-Sáb: 9AM - 7PM</li>
                <li>✉️ hola@flordeluna.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-10 text-center text-gray-500">
            <p>© 2026 Flor de Luna. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/584120000000" className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition transform hover:scale-110">
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
