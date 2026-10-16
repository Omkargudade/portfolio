import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava, FaDatabase, FaServer, FaShieldAlt } from "react-icons/fa";
import {
    SiSpringboot,
    SiHibernate,
    SiMysql,
    SiMongodb,
    SiNodedotjs,
    SiReact,
    SiJavascript,
    SiHtml5,
    SiGithub,
    SiPostman,
    SiApachemaven,
    SiEclipseide,
    SiLeetcode
} from "react-icons/si";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const skills = [
        // Java & Backend Technologies
        { name: "Java", category: "Java & Backend", icon: FaJava, color: "#f89820" },
        { name: "Spring Boot", category: "Java & Backend", icon: SiSpringboot, color: "#6db33f" },
        { name: "Spring Security & JWT", category: "Java & Backend", icon: FaShieldAlt, color: "#10b981" },
        { name: "Spring Data JPA & Hibernate", category: "Java & Backend", icon: SiHibernate, color: "#a855f7" },
        { name: "REST APIs & JDBC", category: "Java & Backend", icon: FaServer, color: "#38bdf8" },
        { name: "Node.js", category: "Java & Backend", icon: SiNodedotjs, color: "#22c55e" },

        // Frontend Technologies
        { name: "React.js", category: "Frontend", icon: SiReact, color: "#61dafb" },
        { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#eab308" },
        { name: "HTML5 / CSS3", category: "Frontend", icon: SiHtml5, color: "#f97316" },

        // Database Technologies
        { name: "MySQL", category: "Databases", icon: SiMysql, color: "#0284c7" },
        { name: "MongoDB", category: "Databases", icon: SiMongodb, color: "#16a34a" },
        { name: "SQL", category: "Databases", icon: FaDatabase, color: "#06b6d4" },

        // Tools & Languages
        { name: "Git & GitHub", category: "Tools & Languages", icon: SiGithub, color: "#e2e8f0" },
        { name: "Postman", category: "Tools & Languages", icon: SiPostman, color: "#ff6c37" },
        { name: "Apache Maven", category: "Tools & Languages", icon: SiApachemaven, color: "#ef4444" },
        { name: "VS Code & Eclipse", category: "Tools & Languages", icon: SiEclipseide, color: "#818cf8" },
        { name: "LeetCode (125+ Solved)", category: "Tools & Languages", icon: SiLeetcode, color: "#ffa116" }
    ];

    const categories = ["All", "Java & Backend", "Frontend", "Databases", "Tools & Languages"];

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
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
        },
    };

    return (
        <section id="skills" className="py-5 position-relative">
            <Container>
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="fw-bold mb-2">Technical Skills</h2>
                    <p className="text-muted fs-6">
                        Expertise spanning Java Full Stack development, modern frontend frameworks, databases, and developer tooling.
                    </p>
                </motion.div>

                {/* Category Filter Pills */}
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 mb-md-5">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="btn btn-sm"
                            style={{
                                borderRadius: "20px",
                                padding: "6px 14px",
                                fontSize: "0.85rem",
                                fontWeight: "600",
                                transition: "all 0.3s ease",
                                backgroundColor: activeCategory === category ? "#38bdf8" : "rgba(255, 255, 255, 0.05)",
                                color: activeCategory === category ? "#0f172a" : "rgba(255, 255, 255, 0.8)",
                                border: activeCategory === category ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.15)",
                                boxShadow: activeCategory === category ? "0 0 15px rgba(56, 189, 248, 0.4)" : "none"
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <Row className="g-3 g-md-4">
                            {filteredSkills.map((skill) => {
                                const IconComponent = skill.icon;
                                return (
                                    <Col xs={6} sm={6} md={4} lg={3} key={skill.name}>
                                        <motion.div variants={itemVariants} className="h-100">
                                            <Card
                                                className="h-100 shadow-lg border-0 hover-card glass"
                                                as={motion.div}
                                                whileHover={{
                                                    y: -6,
                                                    scale: 1.02,
                                                    boxShadow: "0 12px 30px rgba(56, 189, 248, 0.3)"
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Card.Body className="p-3 p-sm-4 d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div
                                                        className="mb-2 mb-sm-3 d-flex align-items-center justify-content-center rounded-circle"
                                                        style={{
                                                            width: "48px",
                                                            height: "48px",
                                                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                                                            border: "1px solid rgba(255, 255, 255, 0.12)"
                                                        }}
                                                    >
                                                        {IconComponent && (
                                                            <IconComponent
                                                                size={24}
                                                                style={{ color: skill.color }}
                                                            />
                                                        )}
                                                    </div>
                                                    <h5
                                                        className="fw-bold mb-2 text-white"
                                                        style={{
                                                            fontSize: "clamp(0.82rem, 2.4vw, 1rem)",
                                                            minHeight: "2.4em",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}
                                                    >
                                                        {skill.name}
                                                    </h5>
                                                    <Badge
                                                        bg="dark"
                                                        className="text-info border border-secondary px-2 py-1 text-truncate"
                                                        style={{ fontSize: "0.68rem", fontWeight: "500", borderRadius: "6px", maxWidth: "100%" }}
                                                    >
                                                        {skill.category}
                                                    </Badge>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </section>
    );
};

export default Skills;
