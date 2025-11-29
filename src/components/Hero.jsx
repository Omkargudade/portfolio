import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        },
    };

    return (
        <section id="home"
            className="d-flex align-items-center justify-content-center position-relative"
            style={{
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            {/* Dynamic Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 100, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="display-2 fw-bold mb-3"
                        variants={itemVariants}
                    >
                        Hello, I'm <span style={{ color: 'var(--accent-color)' }}>OMKAR GUDADE</span>
                    </motion.h1>

                    <motion.p
                        className="lead mb-5 fs-3"
                        variants={itemVariants}
                    >
                        A passionate <span className="fw-bold">Web Developer & Designer</span>
                    </motion.p>

                    <motion.div variants={itemVariants}>
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
                            className="px-5 py-3 rounded-pill fw-bold border-2"
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