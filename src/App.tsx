type Feature = {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Fast setup',
    description: 'Vite + React + TypeScript with a clean, simple baseline.',
  },
  {
    title: 'Responsive layout',
    description: 'A landing page that looks good on mobile and desktop.',
  },
  {
    title: 'Docker-ready',
    description: 'Build once, run anywhere with a production Docker image.',
  },
]

export default function App() {
  return (
    <div className="page" id="top">
      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="/">
            testReact
          </a>
          <nav className="nav" aria-label="Primary">
            <a className="navLink" href="#features">
              Features
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

      <main>
        <section className="hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <p className="eyebrow">Basic React landing page</p>
              <h1 className="headline">Ship a clean landing page in minutes.</h1>
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
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2 className="sectionTitle">Features</h2>
            <div className="grid">
              {features.map((feature) => (
                <article key={feature.title} className="card">
                  <h3 className="cardTitle">{feature.title}</h3>
                  <p className="cardBody">{feature.description}</p>
                </article>
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
