import type { ReactNode } from 'react'

type Feature = {
  icon: ReactNode
  title: string
  description: string
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path
        d="M13 2 3 14h8l-1 8 11-14h-8l0-6z"
        fill="currentColor"
      />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path
        d="M12 2l1.2 4.1L17 8l-3.8 1.9L12 14l-1.2-4.1L7 8l3.8-1.9L12 2zm7 8l.7 2.5L22 14l-2.3 1.5L19 18l-.7-2.5L16 14l2.3-1.5L19 10zM5 12l.8 2.7L8 16l-2.2 1.3L5 20l-.8-2.7L2 16l2.2-1.3L5 12z"
        fill="currentColor"
      />
    </svg>
  )
}

function ContainerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path
        d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9zm2 1.2V15l7 3.5V12L5 8.7zm14 0L12 12v6.5l7-3.5V8.7z"
        fill="currentColor"
      />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <BoltIcon />,
    title: 'Fast setup',
    description: 'Vite + React + TypeScript with a clean, simple baseline.',
  },
  {
    icon: <SparklesIcon />,
    title: 'Responsive layout',
    description: 'A landing page that looks good on mobile and desktop.',
  },
  {
    icon: <ContainerIcon />,
    title: 'Docker-ready',
    description: 'Build once, run anywhere with a production Docker image.',
  },
]

const testimonials = [
  {
    quote:
      'This is the kind of starting point I wish every project had: clean and focused.',
    name: 'Alex',
    title: 'Frontend Engineer',
  },
  {
    quote:
      'The Dockerfile makes it painless to deploy a static site without extra tooling.',
    name: 'Sam',
    title: 'Platform Developer',
  },
]

export default function App() {
  return (
    <div className="page" id="top">
      <a className="skipLink" href="#content">
        Skip to content
      </a>

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="/">
            testReact
          </a>
          <nav className="nav" aria-label="Primary">
            <a className="navLink" href="#features">
              Features
            </a>
            <a className="navLink" href="#testimonials">
              Testimonials
            </a>
            <a className="navLink" href="#about">
              About
            </a>
            <a className="navLink" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="content">
        <section className="hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <p className="eyebrow">Basic React landing page</p>
              <h1 className="headline">
                Ship a <span className="gradientText">prettier</span> landing page
                in minutes.
              </h1>
              <p className="subhead">
                A minimal, modern React + TypeScript app with a simple landing
                layout and a production Dockerfile.
              </p>
              <div className="ctaRow">
                <a className="button" href="#features">
                  View features
                </a>
                <a className="buttonSecondary" href="#about">
                  Learn more
                </a>
              </div>

              <dl className="socialProof" aria-label="Project highlights">
                <div className="proof">
                  <dt className="proofLabel">Stack</dt>
                  <dd className="proofValue">React + TS</dd>
                </div>
                <div className="proof">
                  <dt className="proofLabel">Build</dt>
                  <dd className="proofValue">Static output</dd>
                </div>
                <div className="proof">
                  <dt className="proofLabel">Deploy</dt>
                  <dd className="proofValue">Docker image</dd>
                </div>
              </dl>
            </div>

            <div className="heroCard" role="presentation">
              <div className="heroCardTop" />
              <div className="heroCardBody">
                <div className="stat">
                  <span className="statLabel">Build</span>
                  <span className="statValue">npm run build</span>
                </div>
                <div className="stat">
                  <span className="statLabel">Run</span>
                  <span className="statValue">docker run -p 3000:3000</span>
                </div>
                <div className="stat">
                  <span className="statLabel">Result</span>
                  <span className="statValue">Static, fast, simple</span>
                </div>
                <div className="divider" />
                <p className="heroNote">
                  Designed to be a clean foundation—add routing, components,
                  and an API when you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Features</h2>
                <p className="sectionLead">
                  A modern baseline kept intentionally minimal.
                </p>
              </div>
            </div>
            <div className="grid">
              {features.map((feature) => (
                <article key={feature.title} className="card">
                  <div className="cardTop">
                    <div className="iconBadge">{feature.icon}</div>
                    <h3 className="cardTitle">{feature.title}</h3>
                  </div>
                  <p className="cardBody">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2 className="sectionTitle">Testimonials</h2>
                <p className="sectionLead">
                  Short quotes to show social proof.
                </p>
              </div>
            </div>
            <div className="grid gridTwo">
              {testimonials.map((t) => (
                <figure key={t.name} className="quoteCard">
                  <blockquote className="quote">“{t.quote}”</blockquote>
                  <figcaption className="quoteMeta">
                    <span className="quoteName">{t.name}</span>
                    <span className="quoteTitle">{t.title}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section sectionAlt">
          <div className="container about">
            <div>
              <h2 className="sectionTitle">About</h2>
              <p className="prose">
                This project is intentionally small: a single landing page, a
                minimal set of dependencies, and a Dockerfile that produces a
                production-ready image.
              </p>
            </div>
            <div className="aboutCallout">
              <p className="calloutTitle">Next steps</p>
              <ul className="calloutList">
                <li>Add routing and pages</li>
                <li>Introduce a component library</li>
                <li>Connect an API when you need it</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact">
            <h2 className="sectionTitle">Contact</h2>
            <p className="prose">
              Replace this section with your newsletter signup, a contact form,
              or links to your product.
            </p>
            <div className="ctaRow">
              <a className="button" href="mailto:hello@example.com">
                Email us
              </a>
              <a className="buttonSecondary" href="https://react.dev" target="_blank" rel="noreferrer">
                React docs
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">© {new Date().getFullYear()} testReact</span>
          <a className="navLink" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}
