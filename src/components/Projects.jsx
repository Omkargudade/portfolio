import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';

import atthiStayImg from '../assets/atthi-stay.jpg';

const ProjectCard = ({ project, index, isDesktop }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [4, -4]);
    const rotateY = useTransform(x, [-100, 100], [-4, 4]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            style={isDesktop ? { x, y, rotateX, rotateY, z: 100 } : {}}
            drag={isDesktop}
            dragElastic={0.12}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileHover={isDesktop ? { cursor: "grab" } : {}}
            whileTap={isDesktop ? { cursor: "grabbing" } : {}}
            className="h-100"
        >
            <Card
                className="h-100 shadow-lg border-0 glass overflow-hidden hover-card d-flex flex-column"
                style={{
                    borderRadius: "18px",
                    background: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)"
                }}
            >
                {/* Project Image Banner */}
                <div className="position-relative overflow-hidden" style={{ height: "200px", backgroundColor: "#0b1329" }}>
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                        }}
                    />
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background: "linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%)"
                        }}
                    />
                    <div className="position-absolute top-0 start-0 p-3">
                        <Badge
                            bg="dark"
                            className="border border-info text-info px-3 py-2"
                            style={{
                                backdropFilter: "blur(8px)",
                                backgroundColor: "rgba(15, 23, 42, 0.85) !important",
                                fontSize: "0.78rem",
                                borderRadius: "8px",
                                fontWeight: "600"
                            }}
                        >
                            {project.category}
                        </Badge>
                    </div>
                </div>

                <Card.Body className="d-flex flex-column p-3 p-md-4 flex-grow-1">
                    <Card.Title className="fw-bold mb-1 fs-5 fs-md-4 text-info">
                        {project.title}
                    </Card.Title>
                    <p className="text-muted small mb-3">
                        {project.subtitle}
                    </p>

                    {/* Tech Badges */}
                    <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="badge"
                                style={{
                                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                                    color: "#7dd3fc",
                                    border: "1px solid rgba(56, 189, 248, 0.25)",
                                    fontSize: "0.72rem",
                                    fontWeight: "500",
                                    padding: "4px 8px",
                                    borderRadius: "6px"
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Highlights / Bullet Points */}
                    {project.highlights && project.highlights.length > 0 ? (
                        <ul className="list-unstyled mb-4 flex-grow-1" style={{ fontSize: "0.88rem", lineHeight: "1.65" }}>
                            {project.highlights.map((point, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start">
                                    <FaCheckCircle className="me-2 mt-1 flex-shrink-0" size={14} style={{ color: "#38bdf8" }} />
                                    <span style={{ color: "#ffffff", fontWeight: "400" }}>{point}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Card.Text style={{ fontSize: "0.88rem", lineHeight: "1.65", color: "#ffffff" }} className="mb-4 flex-grow-1">
                            {project.description}
                        </Card.Text>
                    )}

                    {/* Buttons */}
                    <div className="d-flex gap-2 mt-auto pt-3">
                        {project.demoLink && project.demoLink !== "#" ? (
                            <>
                                <motion.a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-grow-1 text-decoration-none d-flex align-items-center justify-content-center gap-2"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                                        backgroundColor: "#0369a1"
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        borderRadius: "10px",
                                        padding: "10px 16px",
                                        backgroundColor: "#0284c7",
                                        color: "#ffffff",
                                        fontWeight: "700",
                                        fontSize: "0.9rem",
                                        border: "1px solid #38bdf8",
                                        boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
                                        cursor: "pointer"
                                    }}
                                >
                                    <FaExternalLinkAlt size={13} style={{ color: "#ffffff" }} />
                                    <span>Live Demo</span>
                                </motion.a>
                                {project.githubLink && (
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none d-flex align-items-center justify-content-center px-3"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(56, 189, 248, 0.25)",
                                            borderColor: "#38bdf8"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            borderRadius: "10px",
                                            padding: "10px 14px",
                                            backgroundColor: "rgba(30, 41, 59, 0.95)",
                                            border: "1px solid rgba(255, 255, 255, 0.25)",
                                            color: "#ffffff",
                                            cursor: "pointer"
                                        }}
                                        title="Source Code"
                                    >
                                        <FaGithub size={18} style={{ color: "#ffffff" }} />
                                    </motion.a>
                                )}
                            </>
                        ) : (
                            <motion.a
                                href={project.githubLink || "https://github.com/omkargudade"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-100 text-decoration-none d-flex align-items-center justify-content-center gap-2"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
                                    backgroundColor: "rgba(56, 189, 248, 0.2)"
                                }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    borderRadius: "10px",
                                    padding: "10px 16px",
                                    backgroundColor: "rgba(30, 41, 59, 0.95)",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                    fontSize: "0.9rem",
                                    border: "1px solid #38bdf8",
                                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
                                    cursor: "pointer"
                                }}
                            >
                                <FaGithub size={18} style={{ color: "#38bdf8" }} />
                                <span>View on GitHub</span>
                            </motion.a>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 992);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const javaFullStackProjects = [
        {
            title: "Mentivo – Mentorship Platform",
            subtitle: "Full Stack Real-Time Mentorship & Video Platform",
            category: "Java Full Stack",
            technologies: [
                "Java 22",
                "Spring Boot 3.3.4",
                "Spring Security",
                "JWT",
                "Spring Data JPA",
                "Hibernate",
                "MySQL",
                "React.js",
                "WebSocket",
                "STOMP",
                "SockJS",
                "WebRTC"
            ],
            highlights: [
                "Developed Spring Boot REST APIs with JPA/Hibernate entities and relationships persisted in MySQL.",
                "Implemented JWT authentication and Spring Security role-based access for Learner, Mentor, and Admin.",
                "Designed mentor profiles, discovery, availability, and time-slot booking with duration-based pricing and statuses.",
                "Integrated WebSocket/STOMP messaging with typing indicators, read receipts, and real-time notifications.",
                "Implemented one-to-one WebRTC video calls with WebSocket signaling, plus reporting, blocking, and moderation."
            ],
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
            demoLink: "#",
            githubLink: "https://github.com/Omkargudade/mentivo_project"
        },
        {
            title: "ShopNova – Full Stack E-Commerce",
            subtitle: "Modern E-Commerce Platform with Admin Inventory",
            category: "Java Full Stack",
            technologies: [
                "Java",
                "Spring Boot",
                "React.js",
                "MySQL",
                "REST APIs",
                "Postman"
            ],
            highlights: [
                "Built product/category management and admin inventory management with Spring Boot REST APIs and MySQL.",
                "Developed product search and catalog functionality over MySQL-backed product data.",
                "Implemented shopping cart and wishlist features connected to backend REST endpoints.",
                "Built order placement and order confirmation workflows.",
                "Integrated the React.js frontend with Spring Boot REST APIs and MySQL; tested endpoints with Postman."
            ],
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
            demoLink: "#",
            githubLink: "https://github.com/Omkargudade/ShopNova-_Full-Stack-E-Commerce-Platform-"
        }
    ];

    const otherProjects = [
        {
            title: "Atthi Stay",
            subtitle: "Full-Stack Airbnb-style Rental Booking Application",
            category: "Node.js & MongoDB / Full Stack",
            technologies: [
                "Node.js",
                "Express",
                "MongoDB",
                "React.js",
                "Bootstrap"
            ],
            highlights: [
                "A full-stack Airbnb-style web app where users can list properties, upload photos, and manage bookings.",
                "Added ratings & reviews with secure user authentication and property search features.",
                "Engineered responsive UI and optimized backend database queries for fast performance."
            ],
            image: atthiStayImg,
            demoLink: "https://major-project-1-zs48.onrender.com",
            githubLink: "https://github.com/omkargudade"
        },
        {
            title: "Shop Rating Platform",
            subtitle: "Full-Stack Store Rating & Review Web Application",
            category: "React, Node.js & SQL",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "SQL",
                "MySQL",
                "REST APIs",
                "Bootstrap"
            ],
            highlights: [
                "Built a full-stack shop rating and review web application enabling users to search stores, submit ratings, and leave verified reviews.",
                "Designed normalized SQL relational database schemas for shops, categories, customer ratings, and reviews with aggregate rating scoring.",
                "Implemented secure authentication, store management features, and responsive frontend UI in React.js connected to Express REST APIs."
            ],
            image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
            demoLink: "#",
            githubLink: "https://github.com/Omkargudade"
        }
    ];

    const categories = ["All", "Java Full Stack", "Web & Other Projects"];

    const showJava = selectedCategory === "All" || selectedCategory === "Java Full Stack";
    const showOther = selectedCategory === "All" || selectedCategory === "Web & Other Projects";

    return (
        <section id="projects" className="py-5 position-relative">
            <Container>
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="fw-bold mb-2">Projects</h2>
                    <p className="text-muted fs-6">
                        Featured full stack applications spanning Java Spring Boot, MySQL, Node.js, and modern web architectures.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 mb-md-5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="btn btn-sm"
                            style={{
                                borderRadius: "20px",
                                padding: "6px 14px",
                                fontSize: "0.85rem",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                backgroundColor: selectedCategory === cat ? "#38bdf8" : "rgba(255, 255, 255, 0.05)",
                                color: selectedCategory === cat ? "#0f172a" : "rgba(255, 255, 255, 0.8)",
                                border: selectedCategory === cat ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.15)",
                                boxShadow: selectedCategory === cat ? "0 0 15px rgba(56, 189, 248, 0.4)" : "none"
                            }}
                        >
                            {cat === "Java Full Stack" ? "☕ Java Full Stack" : cat}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <div>
                        {/* Java Full Stack Projects Section */}
                        {showJava && (
                            <motion.div
                                key="java-section"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="mb-5"
                            >
                                <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 mb-4">
                                    <h3 className="fw-bold fs-5 fs-md-4 mb-0 text-white">
                                        ☕ Java Full Stack Projects
                                    </h3>
                                    <Badge bg="info" className="text-dark fw-bold" style={{ fontSize: "0.72rem" }}>
                                        Resume Featured
                                    </Badge>
                                </div>
                                <Row className="g-4">
                                    {javaFullStackProjects.map((project, index) => (
                                        <Col lg={6} className="mb-3 mb-lg-0" key={project.title}>
                                            <ProjectCard project={project} index={index} isDesktop={isDesktop} />
                                        </Col>
                                    ))}
                                </Row>
                            </motion.div>
                        )}

                        {/* Other Projects (Web & MERN Stack) */}
                        {showOther && (
                            <motion.div
                                key="other-section"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="mb-4"
                            >
                                <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 mb-4">
                                    <h3 className="fw-bold fs-5 fs-md-4 mb-0 text-white">
                                        🌐 Web & Other Projects
                                    </h3>
                                    <Badge bg="secondary" className="text-light fw-bold" style={{ fontSize: "0.72rem" }}>
                                        Node.js, Express, React & SQL
                                    </Badge>
                                </div>
                                <Row className="g-4">
                                    {otherProjects.map((project, index) => (
                                        <Col lg={6} className="mb-3 mb-lg-0" key={project.title}>
                                            <ProjectCard project={project} index={index + 2} isDesktop={isDesktop} />
                                        </Col>
                                    ))}
                                </Row>
                            </motion.div>
                        )}
                    </div>
                </AnimatePresence>
            </Container>
        </section>
    );
};

export default Projects;
