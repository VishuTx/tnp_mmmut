import Navbar from "../Navbar/Navbar";
import Footer from "../utils/Footer";
import QuickLinks from "../utils/Home/quickLink";
import VCsir from "../utils/Home/VCsir";
import TPO from "../utils/Home/TPO";

import { motion, useScroll, useTransform } from "framer-motion";

import "./TestPage.css";
import imageCenter from "../../images/home.jpg";

const TestPage = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // Subtle parallax for hero image
  const heroY = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="fp-hero">
        <motion.div
          className="fp-hero-bg"
          style={{ y: heroY }}
        >
          <img src={imageCenter} alt="Training and Placement" />
        </motion.div>

        <div className="fp-hero-overlay" />

        <div className="fp-hero-content">
          <h1>Training & Placement Cell</h1>
          <p>
            Whatever this is its in the test phase don't take seriously.
          </p>
        </div>
      </section>

      {/* Scroll progress bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="fp-container">

        {/* -------- About -------- */}
        <section className="fp-section">
          <h2 className="fp-section-title">About Us</h2>

          <p className="fp-text">
            <b>Training & Placement Cell (T&P)</b> of the University centrally
            handles all aspects of campus placements, internships, and training
            programs for graduating students across all departments. The cell
            is equipped with the required infrastructure to support each stage
            of the placement process including Pre-Placement Talks, written
            tests, group discussions, and interviews.
          </p>
        </section>

        {/* -------- Announcements -------- */}
        <section className="fp-section">
          <h2 className="fp-section-title">Announcements</h2>
          <p className="fp-muted">Coming soon!</p>
        </section>

        {/* -------- Quick Links -------- */}
        <section className="fp-section">
          <QuickLinks />
        </section>

        {/* -------- VC Desk -------- */}
        <section className="fp-section">
          <h2 className="fp-section-title">
            From the Vice-Chancellor’s Desk
          </h2>

          <div className="fp-message-box">
            <VCsir />
          </div>
        </section>

        {/* -------- TPO Desk -------- */}
        <section className="fp-section">
          <h2 className="fp-section-title">
            From the TPO’s Desk
          </h2>

          <div className="fp-message-box">
            <TPO />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TestPage;
