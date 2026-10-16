import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCheck } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Omkargudade", color: "#333", title: "GitHub" },
        { icon: SiLeetcode, href: "https://leetcode.com", color: "#ffa116", title: "LeetCode" },
        { icon: FaLinkedin, href: "https://linkedin.com", color: "#0077b5", title: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com", color: "#1da1f2", title: "Twitter" },
        { icon: FaEnvelope, href: "mailto:email@example.com", color: "#ea4335", title: "Email" }
    ];

    return (
        <section
            id="contact"
            className="py-5 position-relative"
            style={{
                background: "transparent"
            }}
        >
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <Row className="justify-content-center">
                    <Col md={8}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Card className="p-3 p-sm-4 glass border-0 shadow-lg" style={{ borderRadius: "16px" }}>
                                <Card.Body className="p-2 p-sm-3">
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <motion.div variants={itemVariants} className="mb-3">
                                                    <Form.Group controlId="formName">
                                                        <Form.Label className="fw-medium">Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            className="glass-input border-0"
                                                            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </motion.div>
                                            </Col>
                                            <Col md={6}>
                                                <motion.div variants={itemVariants} className="mb-3">
                                                    <Form.Group controlId="formEmail">
                                                        <Form.Label className="fw-medium">Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Enter your email"
                                                            className="glass-input border-0"
                                                            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </motion.div>
                                            </Col>
                                        </Row>

                                        <motion.div variants={itemVariants} className="mb-4">
                                            <Form.Group controlId="formMessage">
                                                <Form.Label className="fw-medium">Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={4}
                                                    placeholder="Your message..."
                                                    className="glass-input border-0"
                                                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                                                    required
                                                />
                                            </Form.Group>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="text-center">
                                            <Button
                                                variant={formStatus === 'success' ? "success" : "primary"}
                                                type="submit"
                                                className="px-5 py-2 rounded-pill fw-bold position-relative overflow-hidden"
                                                disabled={formStatus === 'submitting' || formStatus === 'success'}
                                                as={motion.button}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <AnimatePresence mode='wait'>
                                                    {formStatus === 'success' ? (
                                                        <motion.div
                                                            key="success"
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            exit={{ y: -20, opacity: 0 }}
                                                            className="d-flex align-items-center justify-content-center"
                                                        >
                                                            <FaCheck className="me-2" /> Sent!
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            key="idle"
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            exit={{ y: -20, opacity: 0 }}
                                                        >
                                                            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </Button>
                                        </motion.div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>

                        <motion.div
                            className="mt-5 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h5 className="mb-4 fw-bold">Connect with me</h5>
                            <div className="d-flex justify-content-center flex-wrap gap-3 gap-sm-4 px-2">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                        style={{ color: 'inherit' }}
                                        whileHover={{
                                            scale: 1.2,
                                            color: social.color,
                                            rotate: 5
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.6 + (index * 0.1)
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <social.icon size={30} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
