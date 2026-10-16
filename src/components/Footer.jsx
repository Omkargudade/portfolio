import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="bg-dark text-white py-4 mt-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Omkar Gudade. All Rights Reserved.
                        </p>
                        <small className="text-muted">
                            Built with React & Bootstrap
                        </small>
                    </Col>
                </Row>
            </Container>
        </motion.footer>
    );
};

export default Footer;
