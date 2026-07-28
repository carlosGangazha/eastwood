import { useEffect, useState } from 'react'
import entrance from './assets/gallery/entrance.webp'
import logo from './assets/gallery/logo.jpg'
import lodge from './assets/gallery/accomodation.jpg'
import cottage from './assets/gallery/accomodation1.jpg'
import cottageRoom from './assets/gallery/accomodation2.jpg'
import hillHouse from './assets/gallery/accomodation6.jpg'
import room from './assets/gallery/room.jpg'
import rooms from './assets/gallery/rooms.jpg'
import kitchen from './assets/gallery/kitchen.jpg'
import food from './assets/gallery/food.jpg'
import food2 from './assets/gallery/food2.jpg'
import food3 from './assets/gallery/food3.jpg'
import food4 from './assets/gallery/food4.jpg'
import food6 from './assets/gallery/food6.jpg'
import staff1 from './assets/gallery/staff1.jpg'
import staff2 from './assets/gallery/staff2.jpg'
import staff3 from './assets/gallery/staff3.jpg'
import staff4 from './assets/gallery/staff4.jpg'
import staff5 from './assets/gallery/staff5.jpg'
import staff6 from './assets/gallery/staff6.jpg'
import staff7 from './assets/gallery/staff7.jpg'
import staff8 from './assets/gallery/staff8.jpg'
import staff9 from './assets/gallery/staff9.jpg'
import staff10 from './assets/gallery/staff10.jpg'
import './App.css'

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>
const routes = { '/': 'home', '/stay': 'stay', '/experiences': 'experiences', '/gallery': 'gallery', '/our-story': 'story', '/book': 'book' }

// Signature motif — a hand-set of contour rings, echoing the granite kopjes
// the lodge sits among. Reused small (as a mark beside every eyebrow) and
// large (as a watermark behind the hero), so the site's one visual idea
// carries through every page instead of living in a single hero image.
function Contour({ className = '' }) {
  return (
    <svg className={`contour ${className}`} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <path d="M100,18 C158,18 176,64 174,100 C172,140 146,182 97,182 C54,182 24,148 26,101 C28,58 54,18 100,18Z" />
      <path d="M100,42 C144,42 156,76 154,101 C152,132 132,158 96,158 C64,158 42,132 44,102 C46,72 64,42 100,42Z" />
      <path d="M100,66 C130,66 138,88 136,102 C134,124 118,136 95,136 C74,136 60,118 62,103 C64,86 76,66 100,66Z" />
    </svg>
  )
}

function Eyebrow({ children, light, className = '' }) {
  return <p className={`eyebrow ${light ? 'light' : ''} ${className}`}><Contour className="eyebrow-mark" />{children}</p>
}

// A margin note in the manner of a surveyor's log — set vertically along
// the edge of every full-bleed page header, unique to that page's content.
function FieldMark({ children }) {
  return <span className="field-mark" aria-hidden="true">{children}</span>
}

function App() {
  const [page, setPage] = useState(routes[window.location.pathname] || 'home')
  const [menuOpen, setMenuOpen] = useState(false)
  const go = (path) => (event) => { event.preventDefault(); window.history.pushState({}, '', path); setPage(routes[path]); setMenuOpen(false); window.scrollTo(0, 0) }
  useEffect(() => { const pop = () => setPage(routes[window.location.pathname] || 'home'); window.addEventListener('popstate', pop); return () => window.removeEventListener('popstate', pop) }, [])
  const Link = ({ to, children, className = '' }) => <a className={className} href={to} onClick={go(to)}>{children}</a>

  return <main>
    <Header page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} Link={Link} />
    {page === 'home' && <Home Link={Link} />}
    {page === 'stay' && <Stay Link={Link} />}
    {page === 'experiences' && <Experiences Link={Link} />}
    {page === 'gallery' && <Gallery />}
    {page === 'story' && <Story Link={Link} />}
    {page === 'book' && <Booking />}
    <Footer Link={Link} />
  </main>
}

function Header({ page, menuOpen, setMenuOpen, Link }) {
  return <header className="site-header on-hero">
    <nav className="nav wrap" aria-label="Main navigation">
      <Link className="brand" to="/"><img className="brand-logo" src={logo} alt="Eastwood Lodges" /></Link>
      <div className="nav-actions">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/stay">Accomodation</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/our-story">Our story</Link>
          <Link className="nav-cta" to="/book">Book your stay <Arrow /></Link>
        </div>
      </div>
    </nav>
  </header>
}

function Home({ Link }) { return <div className="home-page" style={{ '--hero-image': `url(${entrance})` }}>
  <section className="hero-section">
    <Contour className="hero-contour" />
    <div className="hero-copy wrap">
      <p className="eyebrow light"><Contour className="eyebrow-mark" />MUTOKO · ZIMBABWE</p>
      <h1>Slow down.<br /><i>Come alive.</i></h1>
      <p className="hero-text">A private hillside hideaway, thoughtfully made for long mornings, wild landscapes, and unhurried connection.</p>
      <Link className="text-link light" to="/stay">Discover Eastwood <Arrow /></Link>
    </div>
    <div className="hero-footer wrap">
      <div><span>18° 12&rsquo; S</span><span>32° 37&rsquo; E</span></div>
      <p>Where the highveld meets the wild.</p>
      <span className="compass">N ↑<b>elevation 1 190m</b></span>
    </div>
  </section>
  <section className="intro wrap">
    <Eyebrow>A DIFFERENT PACE OF LIFE</Eyebrow>
    <div className="intro-grid">
      <h2>Set among granite kopjes and <i>golden grassland.</i></h2>
      <div className="intro-side">
        <p>Eastwood is a small, soulful lodge in the heart of Mutoko — a place to trade the rush of everyday for the quiet rhythm of the land.</p>
        <Link className="text-link" to="/our-story">Our story <Arrow /></Link>
      </div>
    </div>
  </section>
  <section className="home-cards wrap">
    <Link to="/stay"><span>REST BEAUTIFULLY</span><h3>Places to <i>stay.</i></h3><Arrow /></Link>
    <Link to="/gallery"><span>FROM OUR GALLERY</span><h3>Made with <i>care.</i></h3><Arrow /></Link>
  </section>
</div> }

function PageHero({ eyebrow, title, image, mark }) { return <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(20,24,17,.5), rgba(20,24,17,.5)), url(${image})` }}>
  <div className="wrap"><p className="eyebrow light"><Contour className="eyebrow-mark" />{eyebrow}</p><h1>{title}</h1></div>
  <FieldMark>{mark}</FieldMark>
</section> }

function Stay({ Link }) { return <>
  <PageHero eyebrow="REST, BEAUTIFULLY" title={<>Stay a little <i>longer.</i></>} image={rooms} mark="ACCOMMODATION LOG — 18°12'S 32°37'E" />
  <section className="page-intro wrap"><p>At Eastwood, every room opens onto the landscape. Choose a hideaway for two or gather your favourite people under one generous roof.</p></section>
  <section className="stay-section wrap">
    <div className="stay-grid">
      <article className="stay-card">
        <img className="stay-image" src={cottageRoom} alt="A restful bedroom at Eastwood Lodges" />
        <div className="card-line"><h3>The Stone Cottage</h3><span>FROM $180 / NIGHT</span></div>
        <p>A quiet, considered escape for two, tucked beneath the boulders. King bed, outdoor bath, private terrace.</p>
        <Link to="/book" className="text-link">Enquire about this stay <Arrow /></Link>
      </article>
      <article className="stay-card featured">
        <img className="stay-image" src={hillHouse} alt="Eastwood Lodges accommodation" />
        <div className="card-line"><h3>The Hill House</h3><span>FROM $320 / NIGHT</span></div>
        <p>Our most expansive stay, made for family, friends, and wide-open views. Three rooms, a plunge pool, and your own firepit.</p>
        <Link to="/book" className="text-link">Enquire about this stay <Arrow /></Link>
      </article>
    </div>
  </section>
</> }

function Experiences({ Link }) { return <>
  <PageHero eyebrow="THE EASTWOOD WAY" title={<>Days that unfold<br />at their <i>own pace.</i></>} image={food2} mark="FIELD NOTES — A GUEST'S DAY" />
  <section className="experience-list wrap">
    <article><span className="index-num">01</span><h2>Rest in <i>comfort.</i></h2><p>Enjoy a restful stay in carefully prepared accommodation, with the calm rhythm and genuine warmth of Eastwood.</p></article>
    <article><span className="index-num">02</span><h2>Eat with <i>care.</i></h2><p>Wholesome meals prepared by our kitchen team, served with hospitality that makes every guest feel at home.</p></article>
    <article><span className="index-num">03</span><h2>Feel truly <i>welcome.</i></h2><p>Our team is here to make your time in Mutoko simple, comfortable, and memorable.</p></article>
    <Link to="/book" className="button">Plan your escape <Arrow /></Link>
  </section>
</> }

function Gallery() {
  const images = [{ image: lodge, label: 'The lodge' }, { image: cottage, label: 'Our cottages' }, { image: room, label: 'Guest rooms' }, { image: kitchen, label: 'The kitchen' }, { image: food, label: 'Freshly prepared' }, { image: food2, label: 'From our table' }, { image: food3, label: 'With care' }, { image: food4, label: 'Eastwood flavours' }, { image: food6, label: 'Breakfast service' }, { image: staff1, label: 'The Eastwood team' }, { image: staff2, label: 'The Eastwood team' }, { image: staff3, label: 'The Eastwood team' }, { image: staff4, label: 'The Eastwood team' }, { image: staff5, label: 'The Eastwood team' }, { image: staff6, label: 'The Eastwood team' }, { image: staff7, label: 'The Eastwood team' }, { image: staff8, label: 'The Eastwood team' }, { image: staff9, label: 'The Eastwood team' }, { image: staff10, label: 'The Eastwood team' }]
  return <>
    <PageHero eyebrow="EASTWOOD, IN FOCUS" title={<>Our <i>gallery.</i></>} image={entrance} mark="SPECIMEN INDEX — 019 PLATES" />
    <section className="gallery wrap">
      {images.map(({ image, label }, i) => <figure key={image}>
        <img src={image} alt={label} />
        <figcaption><span>{String(i + 1).padStart(3, '0')}</span>{label}</figcaption>
      </figure>)}
    </section>
  </>
}

function Story() { return <>
  <PageHero eyebrow="OUR STORY" title={<>Made for the <i>unhurried.</i></>} image={staff4} mark="PROVENANCE — MUTOKO DISTRICT" />
  <section className="story-content wrap">
    <Eyebrow>ROOTED IN MUTOKO</Eyebrow>
    <div>
      <h2>A lodge with a deep respect for <i>place.</i></h2>
      <p>Eastwood was born from a simple belief: that the most memorable stays feel connected to their setting. Here, the warm welcome and careful preparation shape every detail.</p>
      <p>We are proud to welcome guests to Mutoko and share the care of a local team that makes every visit feel personal.</p>
    </div>
  </section>
</> }

function Booking() {
  const [notice, setNotice] = useState('')
  const submit = e => { e.preventDefault(); setNotice('Thank you — your stay enquiry has been received. We\u2019ll be in touch shortly.') }
  return <>
    <PageHero eyebrow="MAKE YOUR ESCAPE" title={<>Your place in<br />the <i>quiet.</i></>} image={lodge} mark="ARRIVAL LOG" />
    <section className="booking wrap">
      <div>
        <Eyebrow>STAY ENQUIRY</Eyebrow>
        <h2>Let&rsquo;s plan<br />your <i>escape.</i></h2>
        <p>Tell us when you would like to visit and we&rsquo;ll come back to you with availability.</p>
      </div>
      <form onSubmit={submit}>
        <label>Arrival<input type="date" required /></label>
        <label>Departure<input type="date" required /></label>
        <label>Guests<select defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4+</option></select></label>
        <button className="button" type="submit">Check availability <Arrow /></button>
        {notice && <p className="notice" role="status">{notice}</p>}
      </form>
    </section>
    <section className="contact-strip">
      <div className="wrap">
        <a href="https://wa.me/263780323819">WhatsApp<br /><strong>078 032 3819</strong></a>
        <a href="mailto:eastwoodlodges@gmail.com">Email<br /><strong>eastwoodlodges@gmail.com</strong></a>
      </div>
    </section>
  </>
}

function Footer({ Link }) {
  return <footer>
    <div className="wrap footer-grid">
      <div className="footer-brand">
        <Link className="brand" to="/"><img className="brand-logo" src={logo} alt="Eastwood Lodges" /></Link>
        <p>Stand No. 554, Low Density<br />Mutoko, Zimbabwe</p>
      </div>
      <div className="footer-nav">
        <p className="eyebrow"><Contour className="eyebrow-mark" />Explore</p>
        <Link to="/stay">Accomodation</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/our-story">Our story</Link>
      </div>
      <div className="footer-contact">
        <p className="eyebrow"><Contour className="eyebrow-mark" />Connect</p>
        <a href="mailto:eastwoodlodges@gmail.com">eastwoodlodges@gmail.com</a>
        <a href="https://wa.me/263780323819">WhatsApp: 078 032 3819</a>
        <a href="https://www.facebook.com/search/top?q=Eastwood%20Lodges">Facebook: Eastwood Lodges</a>
      </div>
    </div>
    <div className="footer-bottom wrap">
      <p>© Eastwood Lodges. All rights reserved.</p>
      <p>Designed for quiet, curated stays in Mutoko.</p>
    </div>
  </footer>
}
export default App