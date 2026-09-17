// Synced from the Experience section of Aparajita_Resume.pdf (latest, Sep 14 2026).
export type Experience = {
  org: string;
  title: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    org: "Inari — Digital Phenotyping with Soybean Imagery",
    title: "Data Mine Researcher (ML + Data Science)",
    location: "Purdue University",
    period: "Aug 2025 – May 2026",
    points: [
      "Linked plant phenotypes to genotypes with a ResNet-18 CNN, reaching 96.4% accuracy and a 0.965 F1 score.",
      "Developed phenotyping algorithms to process and analyze 8K soybean images and extract key physical traits.",
      "Ran EDA, OTSU/SAM segmentation, and feature extraction (DGCI, MPRI, HSV) to improve dataset quality.",
      "Identified the top predictor by evaluating 5+ ML models in Scikit-learn & TensorFlow (ResNet-18 CNN, KNN, SVM, RF).",
    ],
  },
  {
    org: "IEEE Motorsports",
    title: "Electrical Engineer",
    location: "Purdue University",
    period: "Jan 2025 – Present",
    points: [
      "Contributed to the electrical design of a 24s8p, 192-cell battery system with 36 backup cells for a student-built EV.",
      "Minimized power loss to ~5 W by integrating nickel strips and a BMS with thermal management for safe motor control.",
      "Redesigned the automated precharge circuit to operate with zero chatter or lag, replacing manual switch-based charging.",
      "Earned 1st Place in Battery Efficiency at the EV Grand Prix — a 4,320 Wh, 86.4 V pack sustaining a 55-minute race.",
    ],
  },
  {
    org: "The Data Mine",
    title: "Undergraduate Data Science Researcher",
    location: "Purdue University",
    period: "Aug 2024 – May 2026",
    points: [
      "Analyzed 10+ real-world datasets with statistical techniques and visualizations to generate actionable insights.",
      "Performed full-stack data analysis with R, Python, SQL, Bash, Polars, PyTorch, and MongoDB for cleaning and modeling.",
      "Worked in a 12-member Agile team with biweekly sprints, improving deliverable quality and communication.",
      "Delivered technical reports with findings that were implemented by industry partners.",
    ],
  },
];
