import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
            }
        }
    };

    const linkVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        })
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="fixed-top"
            style={{
                zIndex: 1000,
                transition: 'all 0.4s ease',
                background: (scrolled || expanded) ? 'rgba(15, 23, 42, 0.92)' : 'transparent',
                backdropFilter: (scrolled || expanded) ? 'blur(16px)' : 'none',
                WebkitBackdropFilter: (scrolled || expanded) ? 'blur(16px)' : 'none',
                borderBottom: (scrolled || expanded) ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                boxShadow: (scrolled || expanded) ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
            }}
        >
            <Navbar expand="lg" expanded={expanded} onToggle={(next) => setExpanded(next)} className="py-2 py-lg-3">
                <Container>
                    <Navbar.Brand
                        href="#home"
                        className="fw-bold fs-4"
                        onClick={() => setExpanded(false)}
                        as={motion.a}
                        whileHover={{
                            scale: 1.05,
                            textShadow: "0 0 8px rgba(56, 189, 248, 0.6)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border-0 shadow-none px-2"
                        style={{ backgroundColor: "rgba(56, 189, 248, 0.12)", borderRadius: "8px" }}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto pt-3 pt-lg-0">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                                <Nav.Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setExpanded(false)}
                                    className="mx-lg-2 my-1 my-lg-0 fw-medium position-relative"
                                    as={motion.a}
                                    custom={index}
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ scale: 1.05, color: "#38bdf8" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                    <motion.span
                                        className="position-absolute bottom-0 start-0 w-100 bg-info d-none d-lg-block"
                                        style={{ height: '2px', borderRadius: '2px' }}
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
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
