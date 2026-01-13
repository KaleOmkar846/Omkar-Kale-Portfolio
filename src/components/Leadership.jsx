import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star } from "lucide-react";
import "./Leadership.css";

const leadershipRoles = [
  {
    id: 1,
    role: "President - Hackathon Club (DYPSST)",
    description:
      "Spearheaded the Smart India Hackathon (SIH) for 59+ teams and mentored students through ideation workshops.",
    icon: Award,
  },
  {
    id: 2,
    role: "Placement Committee Member",
    description:
      "Coordinated major placement drives and acted as a bridge between the student body and the Placement Officer.",
    icon: Star,
  },
];

const LeadershipCard = ({ leadership, index, isInView }) => {
  const Icon = leadership.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="leadership-card"
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="leadership-icon">
        <Icon size={24} />
      </div>
      <h3 className="leadership-role">{leadership.role}</h3>
      <p className="leadership-description">{leadership.description}</p>
    </motion.div>
  );
};

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="leadership section" id="leadership" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <Award size={16} />
            Leadership
          </span>
          <h2 className="section-title">Roles & Responsibilities</h2>
        </motion.div>

        <div className="leadership-grid">
          {leadershipRoles.map((leadership, index) => (
            <LeadershipCard
              key={leadership.id}
              leadership={leadership}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
