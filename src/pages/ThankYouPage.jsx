export default function ThankYouPage() {
  return (
    <div className="page-shell">
      <section className="thankyou-page-section">
        <div className="container">
          <div className="thankyou-page-card">
            <p className="form-eyebrow">YOU&apos;RE IN</p>

            <h1 className="thankyou-page-title">Your Book Is Ready</h1>

            <p className="thankyou-page-copy">
              Thanks for stopping by. Click below to open Book 1 of the MSTA
              series and begin your next step toward clarity, structure, and
              legacy.
            </p>

            <div className="thankyou-actions">
              <a
                href="https://heyzine.com/flip-book/d825c6632d.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Open Book 1
              </a>

              <a
                href="https://urmsta.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Go to URMSTA.com
              </a>
            </div>

            <div className="thankyou-steps">
              <div className="thankyou-step">
                <span className="step-number">1</span>
                <h3>Read Book 1</h3>
                <p>
                  Start with the framework and identify where money may be
                  leaking.
                </p>
              </div>

              <div className="thankyou-step">
                <span className="step-number">2</span>
                <h3>Take the Assessment</h3>
                <p>
                  Visit URMSTA.com to get a clearer picture of where you are
                  now.
                </p>
              </div>

              <div className="thankyou-step">
                <span className="step-number">3</span>
                <h3>Schedule a Consultation</h3>
                <p>
                  Take the next step toward a smarter strategy and a stronger
                  legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}