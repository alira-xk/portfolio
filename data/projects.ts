export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Food Calorie Estimator",
    description:
      "Text-based food calorie estimator using DistilBERT achieving 84% prediction accuracy. Applied NLP and deep learning techniques to process and classify food data using PyTorch and Hugging Face Transformers.",
    tags: ["Python", "Flask", "PyTorch", "Hugging Face"],
    repo: "https://github.com/alira-xk/Food-Calorie-Estimator---Text-Based",
    accent: "from-indigo-500/40 to-violet-500/40",
  },
  {
    title: "Forensic Timeline Reconstructor",
    description:
      "Automated metadata extraction from DOCX, PDF, image, and log files to reconstruct chronological forensic timelines. Implemented SHA-256 integrity hashing, timeline filtering, bookmarking, evidence graphs, and CSV/JSON export.",
    tags: ["React Native", "Node.js", "MongoDB", "Python"],
    repo: "https://github.com/alira-xk/forensic-timeline-reconstructor",
    accent: "from-emerald-500/40 to-teal-500/40",
  },
  {
    title: "Patient Management System",
    description:
      "Secure, scalable backend with role-based access control and JWT authentication. Designed RESTful APIs for patient records and appointments, optimizing queries across 5,000+ records for sub-second response times and 25% faster data retrieval.",
    tags: ["Express.js", "MongoDB", "JWT", "RESTful APIs"],
    repo: "https://github.com/alira-xk/Patient-Management--Backend",
    accent: "from-fuchsia-500/40 to-pink-500/40",
  },
];
