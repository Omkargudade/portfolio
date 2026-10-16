import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const blobVariants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <section id="home"
            className="d-flex align-items-center justify-content-center position-relative min-vh-100 py-5"
            style={{
                paddingTop: '110px',
                paddingBottom: '60px',
                overflow: 'hidden'
            }}
        >
            {/* Dynamic Background Elements */}
            <motion.div
                variants={blobVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '50vw',
                    height: '50vw',
                    maxWidth: '450px',
                    maxHeight: '450px',
                    background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
            <motion.div
                variants={blobVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '40vw',
                    height: '40vw',
                    maxWidth: '380px',
                    maxHeight: '380px',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />

            <Container className="position-relative px-3" style={{ zIndex: 1 }}>
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="fw-bold mb-3"
                        style={{
                            fontSize: "clamp(2rem, 7vw, 4.2rem)",
                            lineHeight: "1.2",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        <span className="d-inline-block">
                            {Array.from("Hello, I'm ").map((char, index) => (
                                <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>{" "}
                        <span style={{ color: 'var(--accent-color)' }} className="d-inline-block">
                            {Array.from("OMKAR GUDADE").map((char, index) => (
                                <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.p
                        className="lead mb-4 mb-md-5 text-light opacity-90"
                        style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.6rem)" }}
                        variants={letterVariants}
                    >
                        A passionate <span className="fw-bold text-info">Web Developer & Designer</span>
                    </motion.p>

                    <motion.div variants={letterVariants}>
                        <Button
                            variant="outline-light"
                            size="lg"
                            href="#projects"
                            as={motion.a}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 25px var(--accent-color)",
                                borderColor: "var(--accent-color)",
                                color: "var(--accent-color)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ boxShadow: "0 0 0px rgba(0,0,0,0)" }}
                            animate={{
                                boxShadow: ["0 0 0px rgba(56,189,248,0)", "0 0 15px rgba(56,189,248,0.5)", "0 0 0px rgba(56,189,248,0)"]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="px-4 py-2 px-sm-5 py-sm-3 rounded-pill fw-bold border-2"
                            style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)" }}
                        >
                            View My Projects
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;