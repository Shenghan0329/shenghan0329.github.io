import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next.js",
    "Three.js",
    "TypeScript",
    "Spring Boot",
    "Django",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
];

const labelsSecond = [
    "AWS EKS",
    "AWS Lambda",
    "AWS S3/RDS",
    "Kafka",
    "Docker",
    "GitHub Actions",
    "Redis",
    "ElastiCache",
    "CI/CD",
    "CloudWatch",
];

const labelsThird = [
    "Gemini API",
    "GenAI/LLM",
    "Data Visualization",
    "Chart.js",
    "Pandas",
    "NumPy",
    "scikit-learn",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build production web applications from frontend to backend, with experience spanning React/Next.js, Three.js 3D graphics, Spring Boot microservices, and Django REST APIs. I focus on scalable architecture and performance optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & Infrastructure</h3>
                    <p>I deploy and scale applications on AWS using EKS (Kubernetes), Lambda, S3, RDS, and MSK (Kafka). I implement observability with CloudWatch/X-Ray, optimize with Redis/ElastiCache, and automate CI/CD with Docker and GitHub Actions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Applied Math & AI</h3>
                    <p>With a Master's in Applied Mathematics, I bring quantitative rigor to software engineering. I integrate GenAI/LLM APIs into products, build data-driven features with visualization, and apply numerical methods to solve real-world problems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;