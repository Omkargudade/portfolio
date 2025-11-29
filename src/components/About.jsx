import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-5 bg-about">
      <Container>
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <Row className="align-items-center">
          <Col md={7} className="mb-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Hi, I’m <strong className="text-primary">Omkar Gudade</strong>, a Computer Science
                Engineering student passionate about building real-world web
                applications. I enjoy working with <strong>Java</strong> and the{" "}
                <strong>MERN stack</strong>, creating user-friendly and efficient
                solutions.
                <br /><br />
                I love learning new technologies, solving problems, and turning
                ideas into reality through code. My goal is to become a skilled{" "}
                <strong>Full-Stack Developer</strong> and contribute to meaningful
                projects that make a real impact.
              </p>
            </motion.div>
          </Col>

          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 p-3 hover-card glass" style={{ borderRadius: "16px" }}>
                <h4 className="fw-bold mb-3 text-primary">
                  🎓 Education
                </h4>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>
                    <strong>Bachelor of Engineering (CSE)</strong>
                    <br />
                    Angadi Institute of Technology & Management
                    <br />
                    <span className="text-muted">
                      CGPA: 7.4 | 2022 – Present
                    </span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
