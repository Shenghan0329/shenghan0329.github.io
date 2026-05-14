import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Saayam For All, US</h4>
            <p>
              Developed Help Request microservice with Spring Boot, Kafka, and PostgreSQL on AWS. Reduced query times from 1.5s to under 100ms via partitioning and indexing. Implemented Redis caching (70% hit rate) and S3 presigned URLs. Deployed to AWS EKS with horizontal pod autoscaling and CloudWatch/X-Ray observability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">GBCS Group, Canada</h4>
            <p>
              Extended a marine management platform with React, Express.js, and MongoDB. Built RESTful APIs with optimized MongoDB queries (20% improvement). Implemented Redis caching with 60% hit rate. Set up CI/CD pipeline with Docker and GitHub Actions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Marketing Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">SCG America, US</h4>
            <p>
              Built responsive business websites with JavaScript and Sass. Performed NLP sentiment analysis on Yelp reviews using scikit-learn (TF-IDF, Word2Vec). Improved search rankings by 2 positions and drove 60% more monthly traffic through SEO optimization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2024 - Dec 2025"
            iconStyle={{ background: '#2c98f0', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. Applied Mathematics</h3>
            <h4 className="vertical-timeline-element-subtitle">New York University (GPA: 3.7)</h4>
            <p>
              Numerical Methods, Scientific Computing, Mathematical Modeling
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2020 - May 2024"
            iconStyle={{ background: '#2c98f0', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. Computer Science & Mathematics</h3>
            <h4 className="vertical-timeline-element-subtitle">New York University (GPA: 3.8) — Cum Laude</h4>
            <p>
              Data Structures & Algorithms, Applied Internet Technology, OOP, Open Source Software
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;