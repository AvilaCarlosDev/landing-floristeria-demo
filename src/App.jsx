import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeOcasion, setActiveOcasion] = useState('Todos')
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const ocasiones = ['Todos', 'Amor', 'Cumpleaños', 'Boda', 'Condolencias', 'Sin ocasión']

  const productos = [
    { img: 'https://images.unsplash.com/photo-1563241527-3004b7be0ee0?w=500&q=80&fit=crop', name: 'Bouquet Aurora Roja', price: 35, ocasion: 'Amor', bestseller: true },
    { img: 'https://images.unsplash.com/photo-1507290439931-a861b5a3825c?w=500&q=80&fit=crop', name: 'Caja Rosé Deluxe', price: 58, ocasion: 'Amor', bestseller: false },
    { img: 'https://images.unsplash.com/photo-1596627689914-2e78f836e6e9?w=500&q=80&fit=crop', name: 'Girasoles de Medianoche', price: 42, ocasion: 'Cumpleaños', bestseller: false },
    { img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80&fit=crop', name: 'Desayuno Amor Bonito', price: 50, ocasion: 'Amor', bestseller: true },
    { img: 'https://images.unsplash.com/photo-1563241527-300c2783e639?w=500&q=80&fit=crop', name: 'Ramo Primavera', price: 39, ocasion: 'Sin ocasión', bestseller: false },
    { img: 'https://images.unsplash.com/photo-1582794543139-8ac92a9abf3d?w=500&q=80&fit=crop', name: 'Box Encanto Floral', price: 65, ocasion: 'Boda', bestseller: false },
    { img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80&fit=crop', name: 'Orquídea Blanca Premium', price: 75, ocasion: 'Condolencias', bestseller: false },
    { img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55300?w=500&q=80&fit=crop', name: 'Centro de Mesa Elegance', price: 85, ocasion: 'Boda', bestseller: true },
  ]

  const filtered = activeOcasion === 'Todos' ? productos : productos.filter(p => p.ocasion === activeOcasion)

  const toggleWish = (i) => setWishlist(w => w.includes(i) ? w.filter(x => x !== i) : [...w, i])

  const beneficios = [
    { icon: '🚚', title: 'Entrega el mismo día', desc: 'Pedidos antes de las 2 PM' },
    { icon: '💳', title: 'Pago seguro', desc: 'Tarjeta, Zelle, efectivo' },
    { icon: '🌟', title: 'Diseños únicos', desc: 'Hechos con amor y detalle' },
    { icon: '💬', title: 'Atención 24/7', desc: 'Siempre disponibles' },
  ]

  const reviews = [
    { name: 'Valentina M.', text: 'Las flores llegaron frescas y hermosas. Mi novio quedó enamorado. 100% recomendado.', stars: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
    { name: 'Gabriela R.', text: 'Pedi el Bouquet Aurora y superó mis expectativas. Entrega puntual y empaque increíble.', stars: 5, img: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&q=80' },
    { name: 'Luis C.', text: 'Ordené para cumpleaños de mi mamá. Fue el mejor regalo. El arreglo fue espectacular.', stars: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  ]

  return (
    <div className="flor-app">

      <header className={`flor-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="flor-logo">
            <span>🌸</span>
            <div>
              <span className="logo-name">Flor de Luna</span>
              <span className="logo-sub">Floristera Online · Venezuela</span>
            </div>
          </a>
          <nav className="flor-nav">
            <a href="#catalogo">Catálogo</a>
            <a href="#ocasiones">Ocasiones</a>
            <a href="#reviews">Reseñas</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="header-actions">
            {wishlist.length > 0 && <span className="wish-count">♥ {wishlist.length}</span>}
            <a href="https://wa.me/584120000000" className="btn-wp">💬 Pedir por WhatsApp</a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="flor-hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ee0?w=1600&q=80&fit=crop" alt="" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-body">
            <div className="hero-text">
              <div className="hero-eyebrow">🌸 Floristera Premium · Envíos en Venezuela</div>
              <h1>Regala flores que<br /><span>dicen lo que sientes</span></h1>
              <p>Bouquets, cajas florales y arreglos artesanales hechos con flores frescas. Entrega el mismo día.</p>
              <div className="hero-btns">
                <a href="#catalogo" className="btn-primary">🌸 Ver catálogo</a>
                <a href="https://wa.me/584120000000" className="btn-ghost">💬 Hablar con nosotras</a>
              </div>
              <div className="hero-trust">
                <span>✅ +3,000 clientes felices</span>
                <span>🚚 Entrega el mismo día</span>
                <span>⭐ 4.9/5 Google</span>
              </div>
            </div>
          </div>
        </section>

        <section className="beneficios-section">
          <div className="section-wrap benef-grid">
            {beneficios.map((b, i) => (
              <div key={i} className="benef-card">
                <div className="benef-icon">{b.icon}</div>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="catalogo" className="catalogo-section">
          <div className="section-wrap">
            <div className="section-head">
              <h2>Nuestros Arreglos</h2>
              <p>Flores frescas, diseños únicos, amor en cada entrega</p>
            </div>
            <div className="ocasiones-tabs">
              {ocasiones.map((o, i) => (
                <button key={i} className={`ocas-tab ${activeOcasion === o ? 'active' : ''}`} onClick={() => setActiveOcasion(o)}>{o}</button>
              ))}
            </div>
            <div className="flores-grid">
              {filtered.map((p, i) => (
                <div key={i} className="flor-card">
                  <div className="flor-img">
                    <img src={p.img} alt={p.name} loading="lazy" />
                    {p.bestseller && <div className="flor-badge">♥ Más vendido</div>}
                    <button className={`flor-wish ${wishlist.includes(i) ? 'active' : ''}`} onClick={() => toggleWish(i)}>
                      {wishlist.includes(i) ? '♥' : '♡'}
                    </button>
                  </div>
                  <div className="flor-body">
                    <span className="flor-ocas">{p.ocasion}</span>
                    <h3>{p.name}</h3>
                    <div className="flor-footer">
                      <span className="flor-price">${p.price}</span>
                      <a href="https://wa.me/584120000000" className="btn-pedir">Pedir ahora</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="section-wrap">
            <div className="section-head center">
              <h2>Lo que dicen nuestras clientas</h2>
              <p>Más de 3,000 momentos especiales creados</p>
            </div>
            <div className="reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <div className="review-stars">{'\u2605'.repeat(r.stars)}</div>
                  <p>"{r.text}"</p>
                  <div className="review-author">
                    <img src={r.img} alt={r.name} />
                    <strong>{r.name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-wrap cta-inner">
            <div>
              <h2>¿Tienes una ocasión especial?</h2>
              <p>Dinos qué quieres expresar y nosotras lo convertimos en flores. 🌸</p>
            </div>
            <a href="https://wa.me/584120000000" className="btn-cta">💬 Hablar por WhatsApp</a>
          </div>
        </section>

        <footer id="contacto" className="flor-footer">
          <div className="section-wrap footer-inner">
            <div>
              <span className="logo-name" style={{color:'white',fontSize:'20px'}}>🌸 Flor de Luna</span>
              <p>Floristera online en Venezuela</p>
            </div>
            <div className="footer-links">
              <h4>Tienda</h4>
              <a href="#">Bouquets</a>
              <a href="#">Cajas florales</a>
              <a href="#">Centros de mesa</a>
            </div>
            <div className="footer-links">
              <h4>Contacto</h4>
              <a href="#">WhatsApp</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="footer-bottom">© 2026 Flor de Luna · Hecho con ♥ en Venezuela</div>
        </footer>
      </main>
    </div>
  )
}

export default App
