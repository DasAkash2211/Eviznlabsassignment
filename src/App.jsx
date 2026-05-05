import { useState } from 'react';
import img1 from './assets/webimg/img1.png';
import img2 from './assets/webimg/img2.png';
import img4 from './assets/webimg/img4.png';
import img5 from './assets/webimg/img5.png';
import img6 from './assets/webimg/img6.png';
import img7 from './assets/webimg/img7.png';
import img8 from './assets/webimg/img8.png';

import './App.css';

const steps = [
  {
    number: '01',
    title: 'TAP, SWIPE, DREAM',
    description: 'It begins with digital invitations sent to your event guests or team members. Each recipient engages with our AI through natural conversation—sharing their unique perspective or meaningful connection.',
    subtext: 'Our technology transforms these insights into personalized fragrance profiles, which master perfumers bring to life using premium ingredients. The finished scents arrive in elegant packaging customizable for your event or brand—creating a sophisticated keepsake thats genuinely personal.',
    image: img4,
    imageAlt: 'Dreamlike clouds over mountains',
    align: 'right',
  },
  {
    number: '02',
    title: 'FIVE-MINUTE AI CREATION',
    description: 'It begins with a few meaningful questions about your guest — their relationship, a favourite memory, the feeling you want to leave behind. Our AI distils this into a bespoke fragrance blueprint.',
    subtext: 'Ingredients are selected, balanced, and refined through thousands of scent combinations, all calibrated to produce a deeply personal olfactory signature.',
    image: img5,
    imageAlt: 'Abstract floral nebula',
    align: 'left',
  },
  {
    number: '03',
    title: 'BOTTLES AWAIT ON THE BIG DAY',
    description: 'Every guest arrives to find their name on a bottle. Each fragrance is individually crafted, elegantly packaged, and ready to be discovered — a gift that is already entirely theirs.',
    subtext: 'The bottles become keepsakes. The fragrance becomes memory. Long after the event ends, the scent remains — carrying the moment forward.',
    image: img6,
    imageAlt: 'Glass perfume bottle glowing',
    align: 'right',
  },
];

const worldCards = [
  {
    id: 'weddings',
    label: 'WEDDINGS',
    description: 'Give your guests something truly memorable. Each person creates a fragrance that captures their experience of your special day—preserving personal moments in a luxurious keepsake.',
    image: img4,
  },
  {
    id: 'corporate',
    label: 'CORPORATE & GIFTING',
    image: img5,
  },
  {
    id: 'hospitality',
    label: 'HOSPITALITY',
    image: img6,
  },
];

const testimonials = [
  {
    quote: "Our guests still talk about it. Each one left with something beautiful, personal and completely unforgettable. It was the perfect way to share a piece of our day — and ourselves — with everyone we love.",
    name: "John Doe",
    title: "VP of Employee Experience",
  },
  {
    quote: "The fragrance captured everything we wanted to say without words. Our team still keeps the bottles on their desks months later. It was the most thoughtful corporate gift we have ever given.",
    name: "Jane Smith",
    title: "Head of Brand Experience",
  },
  {
    quote: "Every single bottle felt intentional. Our guests were moved — it was not just a gift, it was a memory they could carry with them forever. We could not have imagined a better keepsake.",
    name: "Emily Clarke",
    title: "Event Director",
  },
];

const faqs = [
  {
    question: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR VITAE VITAE AUGUE LOBORTIS DICTUM?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
  },
  {
    question: 'NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT?',
  },
  {
    question: 'NEQUE PORRO QUISQUAM EST, QUI DOLOREM IPSUM?',
  },
  {
    question: 'UT ENIM AD MINIMA VENIAM, QUIS NOSTRUM EXERCITATIONEM ULLAM CORPORIS?',
  },
  {
    question: 'QUIS AUTEM VEL EUM IURE REPREHENDERIT QUI IN EA VOLUPTATE VELIT ESSE QUAM NIHIL MOLESTIAE CONSEQUATUR, VEL ILLUM?',
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">leparfum.ai</span>
      <div className="navbar__links">
        <a href="#" className="navbar__link">CURATE MY SCENT</a>
        <a href="#" className="navbar__link">LETS CHAT</a>
      </div>
    </nav>
  );
}

function StepBlock({ step }) {
  const isLeft = step.align === 'left';
  return (
    <div className={`howit-step ${isLeft ? 'howit-step--left' : 'howit-step--right'}`}>
      <div className="howit-step__image-wrap">
        <img src={step.image} alt={step.imageAlt} className="howit-step__image" />
        <div className="howit-step__image-overlay" />
      </div>
      <div className="howit-step__content">
        <span className="howit-step__number">{step.number}</span>
        <h3 className="howit-step__title">{step.title}</h3>
        <p className="howit-step__desc">{step.description}</p>
        <p className="howit-step__sub">{step.subtext}</p>
        <div className="howit-step__line" />
      </div>
    </div>
  );
}

function ChooseWorldSection() {
  return (
    <section className="chooseit">
      <div className="chooseit__header">
        <h2 className="chooseit__heading">Choose your world</h2>
        <h2 className="chooseit__subheading">Which story will you write in scent?</h2>
        <div className="chooseit__rule" />
      </div>
      <div className="world-cards">
        {worldCards.map((card, i) => (
          <div key={card.id} className={`world-card ${i === 0 ? 'world-card--active' : ''}`}>
            <img src={card.image} alt={card.label} className="world-card__image" />
            <div className="world-card__overlay" />
            <div className="world-card__label">{card.label}</div>
            {i === 0 && (
              <div className="world-card__panel">
                <p className="world-card__panel-desc">{card.description}</p>
                <button className="world-card__arrow">→</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}



function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__card">
          <span className="testimonials__quote-mark">"</span>
          <p className="testimonials__text">{t.quote}</p>
          <div className="testimonials__author">
            <span className="testimonials__name">{t.name}</span>
            <span className="testimonials__title">{t.title}</span>
          </div>
        </div>
        <div className="testimonials__nav">
          <button className="testimonials__btn" onClick={prev}>&#8592;</button>
          <button className="testimonials__btn" onClick={next}>&#8594;</button>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-item__trigger" onClick={onToggle}>
        <span className="faq-item__question">{faq.question}</span>
        <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="faq-item__answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__left">
          <h2 className="faq__heading">FAQS</h2>
        </div>
        <div className="faq__right">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">leparfum.ai</span>
        </div>
        <div className="footer__nav">
          <div className="footer__col">
            <a href="#" className="footer__link">HOME</a>
            <a href="#" className="footer__link">LEPARFUM.AI</a>
          </div>
          <div className="footer__col">
            <a href="#" className="footer__link">WEDDINGS</a>
            <a href="#" className="footer__link">CORPORATE & GIFTING</a>
            <a href="#" className="footer__link">HOSPITALITY</a>
          </div>
          <div className="footer__col">
            <a href="mailto:enquiries@leparfum.ai" className="footer__link footer__link--email">
              <span className="footer__email-icon">✉</span> ENQUIRIES@LEPARFUM.AI
            </a>
            <a href="mailto:media@leparfum.ai" className="footer__link footer__link--email">
              <span className="footer__email-icon">✉</span> MEDIA@LEPARFUM.AI
            </a>
          </div>
          <div className="footer__col">
            <a href="#" className="footer__link">PRIVACY POLICY</a>
            <a href="#" className="footer__link">TERMS OF SERVICE</a>
            <a href="#" className="footer__link">COOKIES SETTINGS</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">© 2025 leparfum.ai. All rights reserved.</span>
        <div className="footer__socials">
          <a href="#" className="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" className="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.81a4.85 4.85 0 01-1.07-.12z"/></svg>
          </a>
          <a href="#" className="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" className="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container" style={{ backgroundImage: `url(${img1})` }}>
        <div className="overlay">
          <div className="text1">
            <h2 className="title">Bottle The Moment</h2>
            <h2 className="title">Bespoke Scents For Unforgettable Memories</h2>
            <p>Expertly crafted fragrances that bring</p>
            <p>your stories to life, from personal</p>
            <p>celebrations to corporate gifts</p>
          </div>
        </div>
      </div>

      <div className="hero-container" style={{ backgroundImage: `url(${img2})` }}>
        <div className="overlay1">
          <div className="text">
            <h2 className="title">THE BROKEN GIFT</h2>
            <p>
              Move beyond predictable favors and corporate gifts to something genuinely memorable. Each recipient creates
              a personal fragrance that captures their unique experience or relationship—crafted with premium ingredients
              and presented with an elegance that reflects the occasion.
            </p>
          </div>
          <button className="button">EXPLORE</button>
        </div>
      </div>

      <section className="howit">
        <div className="howit__header">
          <h2 className="howit__heading">HOW IT WORKS</h2>
          <div className="howit__rule" />
        </div>
        <div className="howit__steps">
          {steps.map((step) => (
            <StepBlock key={step.number} step={step} />
          ))}
        </div>
      </section>

      <ChooseWorldSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;