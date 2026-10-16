import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="py-5 bg-about overflow-hidden">
      <Container>
        <motion.h2
          className="text-center fw-bold mb-4 mb-md-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          About Me
        </motion.h2>

        <Row className="align-items-center">
          <Col md={7} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)", lineHeight: "1.8", color: "#e2e8f0" }}>
                Hi, I’m <strong className="text-info">Omkar Gudade</strong>, a Computer Science
                Engineering student and aspiring <strong className="text-info">Java Full Stack Developer</strong> passionate
                about architecting and building high-performance, real-world web applications.
                <br /><br />
                I specialize in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>REST APIs</strong>,{" "}
                <strong>MySQL</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>. I enjoy creating robust backend services,
                secure authentication systems, and seamless, interactive user interfaces.
                <br /><br />
                I am deeply committed to problem solving and data structures, having solved{" "}
                <strong className="text-warning">125+ problems on LeetCode</strong> covering arrays, strings, trees, and algorithmic patterns.
                My goal is to become a skilled <strong>Full-Stack Developer</strong> and contribute to impactful projects that make a real difference.
              </p>
            </motion.div>
          </Col>

          <Col md={5}>
            <motion.div
              style={isDesktop ? { x, y, rotateX, rotateY, z: 100 } : {}}
              drag={isDesktop}
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileHover={isDesktop ? { cursor: "grab" } : {}}
              whileTap={isDesktop ? { cursor: "grabbing" } : {}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className="shadow-lg border-0 p-3 glass"
                style={{
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <h4 className="fw-bold mb-3 text-info">
                  🎓 Education
                </h4>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li className="mb-3">
                    <strong className="text-white">B.E. in Computer Science</strong>
                    <br />
                    <span style={{ color: "#cbd5e1" }}>Angadi Institute of Technology and Management, Belagavi</span>
                    <br />
                    <span className="text-info small fw-semibold">
                      CGPA: 7.8 | 2022 – 2026
                    </span>
                  </li>
                  <li className="mb-3">
                    <strong className="text-white">Pre-University (Science)</strong>
                    <br />
                    <span style={{ color: "#cbd5e1" }}>Terdal Science PU College, Athani</span>
                    <br />
                    <span className="text-info small fw-semibold">
                      71% | 2020 – 2022
                    </span>
                  </li>
                  <li className="mb-1">
                    <strong className="text-white">SSLC (10th Standard)</strong>
                    <br />
                    <span style={{ color: "#cbd5e1" }}>Shree Siddeshwar Vidyavardhak Society, Madabhavi</span>
                    <br />
                    <span className="text-info small fw-semibold">
                      89% | 2019 – 2020
                    </span>
                  </li>
                </ul>

                <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <h5 className="fw-bold mb-2 text-warning d-flex align-items-center gap-2 fs-6">
                    <SiLeetcode size={20} style={{ color: "#ffa116" }} />
                    Problem Solving &amp; DSA
                  </h5>
                  <div
                    className="p-2 px-3 rounded d-flex align-items-center justify-content-between"
                    style={{
                      backgroundColor: "rgba(255, 161, 22, 0.1)",
                      border: "1px solid rgba(255, 161, 22, 0.3)"
                    }}
                  >
                    <div>
                      <div className="text-white fw-bold small">LeetCode</div>
                      <div className="small text-muted" style={{ fontSize: "0.75rem" }}>Data Structures &amp; Algorithms</div>
                    </div>
                    <span className="badge bg-warning text-dark fw-bold px-2 py-1" style={{ fontSize: "0.85rem", borderRadius: "6px" }}>
                      125+ Solved
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
