import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navigation = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
        >
            <Navbar
                expand="lg"
                className="glass py-3"
            >
                <Container>
                    <Navbar.Brand
                        href="#home"
                        className="fw-bold fs-4"
                        as={motion.a}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        My Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <Nav.Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="mx-2 fw-medium"
                                    as={motion.a}
                                    whileHover={{ scale: 1.1, color: "#38bdf8" }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
};

export default Navigation;
