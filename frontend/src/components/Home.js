import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBroadcastTower,
  FaVideo,
  FaPoll,
  FaPodcast,
  FaUser,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher className="feature-icon text-blue-400" />,
    title: "Interactive Templates",
    description: "Select from a range of customizable portfolio templates.",
  },
  {
    icon: <FaBroadcastTower className="feature-icon text-green-400" />,
    title: "Code Integration",
    description:
      "Embed GitHub repositories or live code demos within the portfolio.",
  },
  {
    icon: <FaVideo className="feature-icon text-red-400" />,
    title: "Multimedia Support",
    description:
      "Include videos, images, and presentations alongside project descriptions.",
  },
  {
    icon: <FaPoll className="feature-icon text-yellow-400" />,
    title: "Skill Showcase",
    description:
      "Highlight key skills, certifications, and accomplishments with links to proof.",
  },
  {
    icon: <FaPodcast className="feature-icon text-purple-400" />,
    title: "Portfolio Sharing",
    description:
      "Easily share portfolios via unique links with potential employers or peers.",
  },
  {
    icon: <FaUser className="feature-icon text-gray-400" />,
    title: "More Features Coming Soon",
    description: "Get more reach. More features upcoming...",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Title */}
      <h1 className="home-title">Our Features</h1>
      <p className="home-subtitle">
        Build and showcase your digital portfolios with ease and
        professionalism.
      </p>

      {/* Feature Cards */}
      <div className="feature-cards">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-container">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <motion.div
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/create">Create Your Portfolio</Link>
      </motion.div>
    </div>
  );
};

export default Home;
