import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const images = {
    hero: 'https://images.unsplash.com/photo-1563241527-3004b7be0ee0?w=1200&q=80',
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
      { img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&q=80', name: 'Cumpleaños', desc: 'Sorprende en su día especial' },
      { img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80', name: 'Aniversario', desc: 'Celebra su amor' },
      { img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&q=80', name: 'Amor', desc: 'Di "te amo" con flores' },
      { img: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=500&q=80', name: 'Condolencias', desc: 'Acompaña en momentos difíciles' },
      { img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80', name: 'Nacimiento', desc: 'Bienvenida al nuevo bebé' },
      { img: 'https://images.unsplash.com/photo-1469334031218-e38a10d97897?w=500&q=80', name: 'Agradecimiento', desc: 'Gracias con flores' },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="text-4xl">🌸</span>
              <div>
                <span className="text-2xl font-black text-pink-600">Flor de Luna</span>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Floristería Online</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Inicio</a>
              <a href="#catalogo" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Catálogo</a>
              <a href="#ocasiones" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Ocasiones</a>
              <a href="#personalizados" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Personalizados</a>
              <a href="#testimonios" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition">Testimonios</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/584120000000" className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition">
                <span>💬</span> Hablar
              </a>
              <a href="#catalogo" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-md">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Envía flores que<br/>
                <span className="text-pink-600">hablan por ti</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10">
                Arreglos florales, desayunos y detalles personalizados entregados el mismo día en Punto Fijo, Estado Falcón.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#catalogo" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg inline-flex items-center justify-center">
                  Ver catálogo
                </a>
                <a href="https://wa.me/584120000000" className="bg-white hover:bg-gray-50 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition border-2 border-pink-200 inline-flex items-center justify-center gap-2">
                  <span>💬</span> Hablar con florista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🚚', title: 'Entrega el mismo día', desc: 'Pedidos antes de las 2 PM' },
                { icon: '🎨', title: 'Diseños personalizados', desc: 'Creamos algo único' },
                { icon: '💳', title: 'Pago seguro', desc: 'Múltiples métodos' },
                { icon: '💬', title: 'Atención WhatsApp', desc: 'Respuesta inmediata' },
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

        {/* Catálogo */}
        <section id="catalogo" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-wider">Nuestras Creaciones</span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-4">Catálogo Destacado</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cada arreglo es único, hecho con flores frescas y mucho amor
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {images.productos.map((prod, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="aspect-square overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-pink-600 font-bold uppercase">{prod.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-3">{prod.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-pink-600">${prod.price}</span>
                      <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-semibold transition">
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
        <section id="personalizados" className="py-20 bg-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                  ¿Quieres un arreglo floral personalizado?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Creamos arreglos únicos para ocasiones especiales. Cuéntanos tu idea y la haremos realidad.
                </p>
                <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                  <span>💬</span> Diseñar mi arreglo
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center text-6xl">🎨</div>
                <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center text-6xl">💐</div>
                <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center text-6xl">✨</div>
                <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center text-6xl">💝</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ocasiones */}
        <section id="ocasiones" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-wider">Para Cada Momento</span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-4">Ocasiones Especiales</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {images.ocasiones.map((ocasion, i) => (
                <a key={i} href="#" className="group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <img src={ocasion.img} alt={ocasion.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <h3 className="text-lg font-bold text-center">{ocasion.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{ocasion.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-pink-600 text-sm font-bold uppercase tracking-wider">Nuestra Historia</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-8">
              Más de 10 años creando momentos
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Flor de Luna nació en 2016 con una misión simple: ayudar a las personas a expresar lo que sienten a través de flores.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              Cada arreglo es creado con flores frescas seleccionadas cada mañana, diseñadas por nuestras floristas expertas.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-black text-pink-600 mb-2">+10</div>
                <div className="text-gray-600">Años</div>
              </div>
              <div>
                <div className="text-4xl font-black text-pink-600 mb-2">+5K</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div>
                <div className="text-4xl font-black text-pink-600 mb-2">+20K</div>
                <div className="text-gray-600">Arreglos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-pink-600 text-sm font-bold uppercase tracking-wider">Lo Que Dicen</span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-4">Clientes Felices</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'María G.', text: '¡El arreglo más hermoso! Llegó puntual y mi mamá lloró de emoción.', stars: '★★★★★' },
                { name: 'Carlos R.', text: 'Excelente servicio. El detalle para mi esposa fue perfecto.', stars: '★★★★★' },
                { name: 'Ana P.', text: 'La atención por WhatsApp fue increíble. Me ayudaron a elegir.', stars: '★★★★★' },
              ].map((t, i) => (
                <div key={i} className="bg-pink-50 p-8 rounded-2xl">
                  <div className="text-2xl mb-4 text-yellow-500">{t.stars}</div>
                  <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                  <div className="font-bold text-pink-600">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">¿Listo para sorprender?</h2>
            <p className="text-xl text-white/90 mb-10">
              Haz tu pedido por WhatsApp y recibe tu arreglo floral el mismo día.
            </p>
            <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-xl">
              <span>💬</span> Haz tu pedido
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌸</span>
                <div>
                  <div className="text-2xl font-black">Flor de Luna</div>
                  <div className="text-xs text-gray-400 uppercase">Floristería Online</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Floristería online premium para enviar flores y regalos personalizados a domicilio en Punto Fijo.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:scale-110 transition">📷</a>
                <a href="#" className="text-2xl hover:scale-110 transition">📘</a>
                <a href="#" className="text-2xl hover:scale-110 transition">🎵</a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg mb-6">Ayuda</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">Zonas de envío</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Métodos de pago</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Políticas</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-6">Contacto</h3>
              <ul className="space-y-3 text-gray-400">
                <li>💬 +58 412-000-0000</li>
                <li>📍 Punto Fijo, Falcón</li>
                <li>🕒 Lun-Sáb: 9AM - 7PM</li>
                <li>✉️ hola@flordeluna.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Flor de Luna. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
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
