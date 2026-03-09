import React from "react";

function About() {
  const techStack = [
    { name: "React.js", role: "Frontend Framework", icon: "⚛️" },
    { name: "Node.js + Express", role: "Backend API", icon: "🟢" },
    { name: "Docker", role: "Containerization", icon: "🐳" },
    { name: "GitHub Actions", role: "CI/CD Pipeline", icon: "⚙️" },
    { name: "Nginx", role: "Reverse Proxy", icon: "🔀" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About This Project</h1>
      <p style={styles.description}>
        A full-stack DevOps project demonstrating containerization
        and CI/CD pipeline with Docker and GitHub Actions.
      </p>
      <h2 style={styles.subtitle}>Tech Stack</h2>
      <div style={styles.grid}>
        {techStack.map((tech) => (
          <div key={tech.name} style={styles.card}>
            <div style={styles.icon}>{tech.icon}</div>
            <h3 style={styles.techName}>{tech.name}</h3>
            <p style={styles.techRole}>{tech.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "800px", margin: "0 auto", padding: "30px 20px" },
  title: { color: "#e94560", fontSize: "36px", textAlign: "center" },
  description: { color: "#888", textAlign: "center", fontSize: "16px", marginBottom: "40px" },
  subtitle: { color: "#ffffff", marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" },
  card: {
    backgroundColor: "#16213e",
    borderRadius: "10px",
    padding: "25px",
    textAlign: "center",
    border: "1px solid #0f3460",
  },
  icon: { fontSize: "40px", marginBottom: "10px" },
  techName: { color: "#ffffff", margin: "0 0 5px 0" },
  techRole: { color: "#888", margin: 0, fontSize: "14px" },
};

export default About;