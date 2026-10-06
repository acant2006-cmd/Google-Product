import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const shop = 'https://shop.merch.google/'
const scenarios = [
  {label: 'The morning commute', title: 'First coffee. First train. Favorite layer.', copy: 'Pull it over a tee for cool mornings. When the platform turns windy, add your everyday jacket over the fleece.', layers: ['Everyday tee', 'Camp fleece', 'Your jacket']},
  {label: 'The weekend escape', title: 'A little fresh air. A lot of comfort.', copy: 'Make it your comfortable layer for a crisp neighborhood walk or an evening at the cabin. Keep a shell handy if the weather turns.', layers: ['Base layer', 'Camp fleece', 'Shell as needed']},
  {label: 'The winter routine', title: 'When the cold settles in, layer up.', copy: 'Wear the fleece as a cozy middle layer beneath an insulated coat. Pair with a warm base layer for colder days across the Northeast.', layers: ['Warm base layer', 'Camp fleece', 'Insulated coat']},
]
function Arrow(){return <span aria-hidden="true">↗</span>}
function ProductImage({detail = false}:{detail?:boolean}){return <div className={`product-photo ${detail ? 'detail-photo' : ''}`}><img src="/pullover.png" alt={detail ? 'Close view of the black fleece collar, snap placket, chest pocket, and multicolor Google G' : 'Google Super G Camp Fleece Black Pullover, front view'} /></div>}
export default function App(){
  const [scenario,setScenario] = useState(0)
  const reduced = useReducedMotion()
  const entry = {initial: {opacity: 0, y: reduced ? 0 : 20}, animate: {opacity: 1, y: 0}, transition:{duration: .7}}
  return <>
    <section className="hero" id="top">
      <video className="background-video" src="/hero.mp4" autoPlay={!reduced} muted loop playsInline aria-hidden="true" />
      <div className="veil"/>
      <motion.header {...entry} className="nav">
        <a href="#top" className="brand" aria-label="Google Camp Fleece home"><span className="google-word"><i>G</i><i>o</i><i>o</i><i>g</i><i>l</i><i>e</i></span><span className="brand-divider"/><span className="brand-merch">Merchandise</span></a>
        <nav aria-label="Main navigation"><a href="#comfort">The comfort</a><a href="#details">The details</a><a href="#layering">Wear it your way</a></nav>
        <motion.a className="nav-cta" href={shop} target="_blank" rel="noreferrer" whileHover={{scale:1.03}} whileTap={{scale:.98}}>Explore the store <Arrow/></motion.a>
      </motion.header>
      <main className="hero-grid">
        <motion.div {...entry} transition={{duration:.8,delay:.15}} className="hero-copy">
          <div className="eyebrow season"><span className="snow">✳</span> YOUR COLD-SEASON COMPANION</div>
          <h1 style={{fontWeight:800}}>Cold outside.<span style={{fontWeight:200}}>Comfort within.</span></h1>
          <p className="product-name">Super G Camp Fleece Black Pullover</p>
          <p className="hero-description">Heavyweight fleece. Soft-lined pockets. From brisk Boston mornings to upstate weekends, make cold days a little more comfortable.</p>
          <div className="hero-actions"><motion.a className="button primary" href={shop} target="_blank" rel="noreferrer" whileHover={{scale:1.03}} whileTap={{scale:.97}}>Shop Google Merch <span className="button-arrow"><Arrow/></span></motion.a><a href="#details" className="text-link">Get to know your fleece <span aria-hidden="true">↓</span></a></div>
          <div className="hero-meta"><span><span className="dot"/>Classic black</span><span>15.3 oz. fleece</span><span>Signature Super G</span></div>
        </motion.div>
        <motion.div {...entry} transition={{duration:.9,delay:.25}} className="product-stage">
          <div className="stage-header"><span>THE EVERYDAY WINTER LAYER</span><span>01 / 01</span></div>
          <ProductImage/>
          <div className="stage-footer"><span><span className="black-swatch"/>Black / Super G</span><span className="stage-caption">A little color. A lot of character.</span></div>
        </motion.div>
      </main>
      <div className="hero-bottom"><span>MADE FOR YOUR COLD-SEASON ROUTINE</span><p>City mornings. Cabin evenings. Everything in between.</p><a href="#comfort" aria-label="Explore the comfort">↓</a></div>
    </section>

    <section id="comfort" className="comfort section-wrap">
      <div className="section-intro"><span className="eyebrow">01 / THE COMFORT</span><h2 style={{fontWeight:600}}>The season changes.<br/><span style={{fontWeight:300}}>Your comfort stays.</span></h2><p>A familiar fleece feel, a versatile black finish, and details that fit right into everyday life.</p></div>
      <div className="benefits"><article><span className="benefit-icon">≈</span><h3>A softer side to cold days.</h3><p>Made with 15.3-ounce, 100% polyester fleece for a substantial, cozy feel. The textured fabric holds pockets of air near your body to help retain warmth on chilly days.</p></article><article><span className="benefit-icon">↟</span><h3>Layer into your routine.</h3><p>Brushed tricot-lined open hand pockets give cold hands a soft place to settle. Wear it over a tee in crisp weather, then under a coat as winter sets in.</p></article><article><span className="benefit-icon google-dot-icon"><b/><b/><b/><b/></span><h3>Quiet style. Familiar color.</h3><p>Classic black goes easily with denim, chinos, and your everyday outerwear. The small multicolor Super G adds a recognizable finishing touch.</p></article></div>
    </section>

    <section id="details" className="details section-wrap">
      <div className="detail-visual"><div className="eyebrow">A CLOSER LOOK</div><ProductImage detail/><span className="detail-caption">Small details. Everyday comfort.</span></div>
      <div className="detail-copy"><span className="eyebrow">02 / THE DETAILS</span><h2 style={{fontWeight:600}}>Comfort you can feel.<br/><span style={{fontWeight:300}}>Details you can see.</span></h2><p className="details-intro">A heavyweight polyester fleece body paired with woven nylon details. Each material brings something different to your cold-weather routine.</p><div className="detail-row"><span>01</span><div><h3>15.3-ounce polyester fleece</h3><p>100% polyester fleece creates the substantial body of the pullover. Its textured surface traps air to help insulate, making a comfortable middle layer when temperatures dip.</p></div></div><div className="detail-row"><span>02</span><div><h3>Woven nylon & four-snap placket</h3><p>100% nylon woven inner collar, placket, and pocket add a smooth contrast to the fleece. Fasten the four snaps for more coverage, or open them when you head indoors.</p></div></div><div className="detail-row"><span>03</span><div><h3>Brushed tricot-lined hand pockets</h3><p>Open hand pockets are lined with brushed tricot for a soft touch. Tuck your hands in during a chilly pause, with the signature Super G completing the look.</p></div></div><a href={shop} target="_blank" rel="noreferrer" className="text-link dark-link">Explore Google’s merchandise store <Arrow/></a></div>
    </section>

    <section id="layering" className="layering section-wrap"><div className="section-intro"><span className="eyebrow">03 / WEAR IT YOUR WAY</span><h2 style={{fontWeight:600}}>One fleece.<span style={{fontWeight:300}}> Your kind of Northeast.</span></h2></div><div className="scenario-tabs" role="tablist" aria-label="Layering occasions">{scenarios.map((s,i)=><button key={s.label} id={`tab-${i}`} role="tab" aria-selected={scenario===i} aria-controls="scenario-panel" onClick={()=>setScenario(i)} onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=(scenario+(e.key==='ArrowRight'?1:2))%3;setScenario(next);document.getElementById(`tab-${next}`)?.focus()}}} tabIndex={scenario===i?0:-1}>{s.label}<span aria-hidden="true">↗</span></button>)}</div><div className="scenario-panel" role="tabpanel" id="scenario-panel" aria-labelledby={`tab-${scenario}`}><div><h3>{scenarios[scenario].title}</h3><p>{scenarios[scenario].copy}</p></div><ol className="layers">{scenarios[scenario].layers.map((layer,i)=><li key={layer}><span>0{i+1}</span>{layer}{i===1&&<b>YOUR GO-TO</b>}</li>)}</ol></div></section>

    <section className="closing"><span className="eyebrow">SETTLE INTO THE COLD</span><h2 style={{fontWeight:700}}>Your next favorite layer.<span style={{fontWeight:200}}>All season long.</span></h2><p>Super G Camp Fleece Black Pullover</p><motion.a whileHover={{scale:1.03}} whileTap={{scale:.97}} className="button primary" href={shop} target="_blank" rel="noreferrer">Explore Google Merch <span className="button-arrow"><Arrow/></span></motion.a></section>
    <footer className="footer"><a href="#top" className="footer-brand">Google <span>Camp Fleece</span></a><p>Product landing page concept · Purchases through Google Merch Shop.</p><a href="#top">Back to top ↑</a></footer>
  </>
}
