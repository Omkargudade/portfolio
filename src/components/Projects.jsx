import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

import atthiStayImg from '../assets/atthi-stay.jpg';
import studentDashboardImg from '../assets/student-dashboard.jpg';

const Projects = () => {
    const projects = [
        {
            title: "Atthi Stay",
            description: `A full-stack Airbnb-style web app where users can list properties, upload photos, 
                           add ratings & reviews with secure authentication and property search features. 
                           Built with responsive design focused on clean UI & user experience.`,
            image: atthiStayImg,
            demoLink: "https://major-project-1-zs48.onrender.com"
        },
        {
            title: "Student Performance Analysis Dashboard",
            description: `A web-based analytical dashboard to evaluate student performance using academic data. 
                           Shows strengths, weaknesses, and trend analysis with interactive charts for teachers and institutions.`,
            image: studentDashboardImg
        },
        {
            title: "Project 3 (Coming Soon)",
            description: `Another full-stack development project showcasing advanced features and modern 
                           technologies. Currently under development.`,
            image: "https://via.placeholder.com/300x200"
        }
    ];

    return (
        <section id="projects" className="py-5" style={{ background: 'transparent' }}>
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h2>

                <Row>
                    {projects.map((project, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    className="h-100 shadow-lg border-0 glass overflow-hidden"
                                    style={{ borderRadius: "16px" }}
                                    as={motion.div}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div style={{ overflow: 'hidden' }}>
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="card-img-top"
                                            style={{ height: "200px", objectFit: "cover" }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="fw-bold text-info">{project.title}</Card.Title>
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            {project.description}
                                        </Card.Text>

                                        <div className="mt-auto">
                                            {project.demoLink ? (
                                                <Button
                                                    variant="outline-info"
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    className="w-100 fw-bold"
                                                    as={motion.a}
                                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    View Demo
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="outline-secondary"
                                                    disabled
                                                    className="w-100 fw-bold"
                                                >
                                                    Coming Soon
                                                </Button>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
