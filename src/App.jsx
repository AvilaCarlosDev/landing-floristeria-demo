import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Imágenes reales de Unsplash - Flores
  const images = {
    hero: 'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?w=1200&q=80',
    about: 'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
    categorias: {
      ramos: 'https://source.unsplash.com/random/500x500/?flowers,roses&q=80',
      bodas: 'https://source.unsplash.com/random/500x500/?flowers,roses&q=80',
      eventos: 'https://source.unsplash.com/random/500x500/?flowers,roses&q=80',
      globos: 'https://source.unsplash.com/random/500x500/?flowers,roses&q=80',
    },
    galeria: [
      'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
      'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
      'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
      'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
      'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
      'https://source.unsplash.com/random/600x400/?flowers,bouquet&q=80',
    ],
    productos: [
      { img: 'https://images.unsplash.com/photo-1563241527-300c2783e639?w=400&q=80', name: 'Ramo de Rosas', price: '$45' },
      { img: 'https://images.unsplash.com/photo-1591195853828-11db79442529?w=400&q=80', name: 'Girasoles', price: '$38' },
      { img: 'https://images.unsplash.com/photo-1507290439931-a861b5a3825c?w=400&q=80', name: 'Centro de Mesa', price: '$55' },
      { img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&q=80', name: 'Arreglo con Globos', price: '$65' },
    ],
  }

  return (
    <div className="min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="text-5xl">🌸</div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  SIENA FLOWER
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">Punto Fijo, Falcón</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-10">
              <a href="#colecciones" className="text-sm font-bold uppercase tracking-wider hover:text-pink-600 transition">Colecciones</a>
              <a href="#galeria" className="text-sm font-bold uppercase tracking-wider hover:text-pink-600 transition">Galería</a>
              <a href="#nosotros" className="text-sm font-bold uppercase tracking-wider hover:text-pink-600 transition">Nosotros</a>
              <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105 shadow-lg">
                Pedir Ahora
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Arreglo floral Siena Flower" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 via-rose-900/50 to-pink-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Slogan */}
          <div className="inline-block bg-white/95 backdrop-blur px-8 py-3 rounded-full mb-8 shadow-2xl">
            <span className="text-pink-600 text-sm font-bold tracking-widest uppercase">
              🌈 ¡LO SUEÑAS, LO CREAMOS!
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            ARREGLOS QUE<br/>
            <span className="italic text-pink-300">ENAMORAN</span>
          </h1>

          <p className="text-xl text-white/95 max-w-2xl mx-auto mb-10 font-light">
            Floristería, obsequios, arreglos con globos y decoraciones únicas 
            en Punto Fijo. Cada detalle cuenta una historia de amor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl">
              🌹 Ver Catálogo
            </a>
            <a href="#colecciones" className="bg-white/95 hover:bg-white text-gray-800 px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl">
              Explorar Colecciones
            </a>
          </div>

          {/* Decorative flowers */}
          <div className="mt-16 flex justify-center gap-4 text-6xl opacity-80">
            <span>🌹</span>
            <span>🌻</span>
            <span>🌸</span>
            <span>💐</span>
            <span>🌷</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="colecciones" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-100 text-pink-600 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Nuestras Colecciones
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">Para Cada Ocasión</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'ramos', name: 'Ramos', desc: 'Detalles que enamoran', img: images.categorias.ramos, count: '24 diseños' },
              { id: 'bodas', name: 'Bodas', desc: 'Tu día perfecto', img: images.categorias.bodas, count: '18 paquetes' },
              { id: 'eventos', name: 'Eventos', desc: 'Celebraciones únicas', img: images.categorias.eventos, count: '12 opciones' },
              { id: 'globos', name: 'Globos', desc: 'Arreglos divertidos', img: images.categorias.globos, count: '30 variedades' },
            ].map((cat) => (
              <div 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ${
                  selectedCategory === cat.id ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white/80 text-xs uppercase tracking-widest mb-2">{cat.count}</div>
                    <h3 className="text-3xl font-black text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-sm">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Social Proof - Stats */}
      <section className="bg-pink-50 py-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-pink-600 mb-2">+500</div>
              <div className="text-sm lg:text-base font-bold text-pink-800">Arreglos entregados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-pink-600 mb-2">4.8★</div>
              <div className="text-sm lg:text-base font-bold text-pink-800">Clientes felices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-pink-600 mb-2">100%</div>
              <div className="text-sm lg:text-base font-bold text-pink-800">Frescura garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-pink-600 mb-2">24h</div>
              <div className="text-sm lg:text-base font-bold text-pink-800">Entrega rápida</div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-rose-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              ⭐ Favoritos
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">Más Vendidos</h2>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {images.productos.map((producto, index) => (
              <div key={index} className="break-inside-avoid group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={producto.img} 
                      alt={producto.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white text-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition">
                      ❤️
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{producto.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-pink-600">{producto.price}</span>
                      <a href="https://wa.me/584120000000" className="text-sm text-gray-500 hover:text-pink-500 transition font-bold">
                        Pedir →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span className="text-pink-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Inspiración</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900">Nuestra Galería</h2>
            </div>
            <a href="https://instagram.com/sienaflower.pf" className="text-pink-500 font-bold hover:text-pink-600 transition mt-6 lg:mt-0 flex items-center gap-2">
              <span>📷</span>
              Ver más en @sienaflower.pf →
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {images.galeria.map((img, index) => (
              <div 
                key={index} 
                className={`group overflow-hidden rounded-2xl ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                } ${
                  index === 5 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-square lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}`}>
                  <img 
                    src={img} 
                    alt={`Arreglo floral ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-pink-100 to-rose-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={images.about} 
                  alt="Florista Siena Flower trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-black text-pink-500 mb-2">100%</div>
                <div className="text-gray-600 text-sm font-bold uppercase tracking-wider">Hecho con<br/>Amor</div>
              </div>
            </div>

            <div className="lg:pl-12">
              <span className="text-pink-500 text-sm font-bold tracking-[0.3em] uppercase block mb-6">Sobre Nosotros</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                By: Maria Coronel<br/>
                <span className="italic text-pink-500">Tienda Física y Online</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                En Siena Flower creamos arreglos florales únicos, obsequios especiales, 
                decoraciones con globos y mucho más. Cada detalle es creado con amor 
                para hacer tus momentos inolvidables.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: '🎨', title: 'Diseños Personalizados', desc: 'A tu gusto' },
                  { icon: '🎈', title: 'Arreglos con Globos', desc: 'Divertidos únicos' },
                  { icon: '🎁', title: 'Obsequios', desc: 'Detalles especiales' },
                  { icon: '🚚', title: 'Delivery', desc: 'En Punto Fijo' },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-4xl">{feature.icon}</span>
                    <div>
                      <div className="font-bold text-lg mb-1 text-gray-900">{feature.title}</div>
                      <div className="text-gray-600 text-sm">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/584120000000" className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-4 rounded-full font-bold transition transform hover:scale-105 shadow-xl">
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="text-7xl mb-8 block">💌</span>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">¿Listo para Sorprender?</h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
            Pedidos personalizados para cualquier ocasión. 
            Escríbenos y creamos algo único juntos.
          </p>
          <a href="https://wa.me/584120000000" className="inline-block bg-white hover:bg-gray-100 text-pink-600 px-12 py-5 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-2xl">
            Ordenar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌸</span>
                <div>
                  <div className="text-2xl font-black">SIENA FLOWER</div>
                  <div className="text-xs text-gray-400 tracking-widest uppercase">Punto Fijo, Falcón</div>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Floristería, obsequios, arreglos con globos y decoraciones.
                🌈¡LO SUEÑAS, LO CREAMOS!
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/sienaflower.pf" className="bg-gray-800 hover:bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition text-xl">
                  📷
                </a>
                <a href="https://wa.me/584120000000" className="bg-gray-800 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition text-xl">
                  💬
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Colecciones</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#colecciones" className="hover:text-pink-400 transition">Ramos</a></li>
                <li><a href="#colecciones" className="hover:text-pink-400 transition">Bodas</a></li>
                <li><a href="#colecciones" className="hover:text-pink-400 transition">Eventos</a></li>
                <li><a href="#colecciones" className="hover:text-pink-400 transition">Globos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 text-gray-400">
                <li>📍 Punto Fijo, Edo. Falcón</li>
                <li>📱 +58 412-000-0000</li>
                <li>📷 @sienaflower.pf</li>
                <li>🕒 Lun-Sab: 9AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 Siena Flower. Landing page demo creada por Carlos Ávila
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
