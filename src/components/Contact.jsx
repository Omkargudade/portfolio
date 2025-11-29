import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLanguage, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const formRef = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        // Simulate sending for now
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        formRef.current.reset();
    };

    return (
        <section
            id="contact"
            className="py-5"
            style={{
                background: "transparent"
            }}
        >
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className="text-center mb-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I'm always interested in new opportunities and exciting projects.
                    Let’s connect and discuss how we can work together!
                </motion.p>

                <Row>
                    {/* Left Contact Info */}
                    <Col md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="mb-4">Contact Information</h4>

                            {[
                                { icon: FaEnvelope, text: "Omkargudade@gmail.com" },
                                { icon: FaPhone, text: "+91 6363779125" },
                                { icon: FaMapMarkerAlt, text: "Karnataka, India" },
                                { icon: FaLanguage, text: "English / हिंदी / ಕನ್ನಡ" }
                            ].map((item, index) => (
                                <Card key={index} className="p-3 mb-3 glass border-0 shadow-sm">
                                    <div className="d-flex align-items-center">
                                        <item.icon className="me-3 text-info fs-5" />
                                        {item.text}
                                    </div>
                                </Card>
                            ))}
                        </motion.div>
                    </Col>

                    {/* Right Send Message */}
                    <Col md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="mb-4">Send Message</h4>

                            <Form ref={formRef} onSubmit={sendEmail}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Control
                                            name="from_name"
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            className="glass border-0"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                                        />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Control
                                            name="reply_to"
                                            type="email"
                                            placeholder="Your Email"
                                            required
                                            className="glass border-0"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                                        />
                                    </Col>
                                </Row>

                                <div className="mb-3">
                                    <Form.Control
                                        name="subject"
                                        type="text"
                                        placeholder="Your Message Subject"
                                        required
                                        className="glass border-0"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        placeholder="Your Message"
                                        required
                                        className="glass border-0"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`btn w-100 fw-bold ${isSent ? 'btn-success' : 'btn-light'}`}
                                    style={{ borderRadius: "10px" }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={isSent ? { scale: [1, 1.1, 1] } : {}}
                                >
                                    {isSent ? "Message Sent!" : "Send Message"}
                                </motion.button>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>

                {/* Social Icons */}
                <div className="text-center mt-4">
                    <motion.h5
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Connect With Me
                    </motion.h5>
                    <div className="mt-3">
                        {[
                            { icon: FaLinkedin, link: "https://www.linkedin.com/in/omkar-gudade-80b71a2b3" },
                            { icon: FaGithub, link: "https://github.com/Omkargudade" },
                            { icon: FaTwitter, link: "https://twitter.com/" },
                            { icon: FaFacebook, link: "https://facebook.com/" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-inline-block mx-3 fs-3"
                                whileHover={{ scale: 1.2, color: "#38bdf8", rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Contact;
