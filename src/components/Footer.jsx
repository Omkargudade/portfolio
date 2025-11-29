import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="bg-dark text-white text-center py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <Container>
                <p className="mb-0">&copy; {new Date().getFullYear()} Omkar Gudade. All Rights Reserved.</p>
                <small className="text-white-50">Designed & Built with ❤️</small>
            </Container>
        </motion.footer>
    );
};

export default Footer;
