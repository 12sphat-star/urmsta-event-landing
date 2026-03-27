import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/msta-banner.png";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/E6kJjCkXCeOgpU5OhZJh/webhook-trigger/2a50b2e3-1c6d-4d06-8912-e0ab31c47681";

export default function EventLandingPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    source: "MSTA Event Landing Page",
    campaign: "Vendor Event",
    bookRequested: "Book 1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Webhook submission error:", error);
      setErrorMessage(
        "Something went wrong submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">MSTA | Mindset + Skillset + Toolset + Assets</p>

            <h1 className="hero-title">
              Claim Your Free
              <br />
              MSTA Book
            </h1>

            <p className="hero-subtitle">
              You saw the message at the table. Now take the next step. Get Book
              1, the first in a 4-book MSTA series, then visit URMSTA.com to
              take the assessment and schedule your consultation.
            </p>

            <div className="hero-buttons">
              <a href="#lead-form" className="btn btn-primary">
                Claim Book 1
              </a>
              <a href="#event-next-step" className="btn btn-secondary">
                See the Next Step
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src={bannerImage}
              alt="MSTA event banner"
              className="hero-banner-image"
            />
          </div>
        </div>
      </section>

      <section className="event-strip">
        <div className="container">
          <div className="event-strip-card">
            <h2>Seen us at the event?</h2>
            <p>
              You are in the right place. Claim your free MSTA book, take the
              next step toward your assessment, and schedule a consultation at
              URMSTA.com.
            </p>
          </div>
        </div>
      </section>

      <section className="message-strip">
        <div className="container">
          <h2>Build a system. Keep money in the family.</h2>
          <p>
            MSTA brings together mindset, skillset, toolset, and assets into one
            practical framework designed to help individuals, families, and
            business owners build with intention.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container two-column">
          <div className="content-card">
            <h3>What You’ll Get Here</h3>
            <ul className="feature-list">
              <li>Free access to Book 1 of the MSTA series</li>
              <li>The first step in a 4-book framework</li>
              <li>A simple introduction to Mindset + Skillset + Toolset + Assets</li>
              <li>Direction to the MSTA assessment</li>
              <li>A path to schedule a consultation</li>
            </ul>
          </div>

          <div className="content-card form-card" id="lead-form">
            <p className="form-eyebrow">FREE ACCESS</p>

            <h3 className="form-title">Get Book 1 of the MSTA Series</h3>

            <p className="form-copy">
              This free book is the first in a 4-book MSTA series designed to
              help you begin understanding the system of Mindset + Skillset +
              Toolset + Assets. Enter your details below to get Book 1 and the
              next steps to move forward with clarity and a plan.
            </p>

            <div className="form-trust">
              <span>✔ No spam</span>
              <span>✔ Simple steps</span>
              <span>✔ Clear direction</span>
            </div>

            <form className="lead-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Unlock Book 1"}
              </button>

              {errorMessage && <p className="form-error">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="book-section">
        <div className="container">
          <div className="content-card center-card">
            <h2>Why Start With Book 1?</h2>
            <p>
              Book 1 is the first in a 4-book series built to help you begin
              understanding the MSTA system: Mindset + Skillset + Toolset +
              Assets.
            </p>
            <p>
              Each book builds on the one before it, giving you a clearer
              picture of how to think, build, protect, and position what you
              have in a smarter way.
            </p>
            <p>
              This first book is designed to be simple, practical, and strong
              enough to open the door to a bigger conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="qr-section">
        <div className="container">
          <div className="qr-card">
            <h2>What to do after you claim the book</h2>
            <div className="qr-grid">
              <div className="qr-step">
                <span className="step-number">1</span>
                <h3>Read Book 1</h3>
                <p>Start with the framework and see where the leaks may be.</p>
              </div>

              <div className="qr-step">
                <span className="step-number">2</span>
                <h3>Take the Assessment</h3>
                <p>
                  Go to URMSTA.com and take the assessment to get deeper
                  clarity.
                </p>
              </div>

              <div className="qr-step">
                <span className="step-number">3</span>
                <h3>Schedule a Consultation</h3>
                <p>
                  Book a conversation around legacy, protection, structure, and
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next-section" id="event-next-step">
        <div className="container">
          <h2>Your Next Best Step</h2>
          <p className="next-intro">
            Don’t stop at information. Turn it into a plan.
          </p>

          <p className="legacy-line">
            What are you building that will outlive you?
          </p>

          <p className="legacy-subline">
            Because in the end, it’s about your family and your legacy.
          </p>

          <div className="hero-buttons">
            <a
              href="https://urmsta.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Go to URMSTA.com
            </a>
            <a href="#lead-form" className="btn btn-secondary">
              Claim the Book First
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <p className="footer-name">Keith Robertson | The Fin Coach</p>
          <p className="footer-copy">Mindset • Skillset • Toolset • Assets</p>
        </div>
      </footer>
    </div>
  );
}