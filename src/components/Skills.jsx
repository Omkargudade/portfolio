import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    return (
        <section id="skills" className="py-5 position-relative">
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Skills
                </motion.h2>

                <Row>
                    {/* Frontend Skills */}
                    <Col md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-100 shadow-lg border-0 hover-card glass">
                                <Card.Body className="p-4">
                                    <h4 className="card-title mb-4 text-info">Frontend</h4>

                                    {[
                                        { name: "React.js", level: 90 },
                                        { name: "HTML", level: 95 },
                                        { name: "CSS", level: 95 },
                                        { name: "JavaScript", level: 85 },
                                    ].map((skill, index) => (
                                        <motion.div
                                            className="mb-3"
                                            key={skill.name}
                                            custom={index}
                                            variants={skillVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="fw-medium">{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                                <motion.div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    {/* Backend & Tools Skills */}
                    <Col md={6} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-100 shadow-lg border-0 hover-card glass">
                                <Card.Body className="p-4">
                                    <h4 className="card-title mb-4 text-success">Backend</h4>

                                    {[
                                        { name: "Node.js", level: 80 },
                                        { name: "Express.js", level: 75 },
                                        { name: "Java", level: 75 },
                                        { name: "MongoDB", level: 80 },
                                        { name: "MySQL", level: 70 },
                                    ].map((skill, index) => (
                                        <motion.div
                                            className="mb-3"
                                            key={skill.name}
                                            custom={index}
                                            variants={skillVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="fw-medium">{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                                <motion.div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}

                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
