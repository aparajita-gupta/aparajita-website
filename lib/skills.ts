// Synced from the Technical Skills section of Aparajita_Resume.pdf (latest, Sep 14 2026).
export const skillGroups: {
  title: string;
  icon: string;
  color: string;
  items: string[];
}[] = [
  {
    title: "Languages",
    icon: " </> ",
    color: "#3b82f6", // blue — matches the "Software" project category
    items: ["C", "C++", "C#", "Python", "Java", "SystemVerilog", "MATLAB", "Bash"],
  },
  {
    title: "Embedded & Hardware",
    icon: "⚙",
    color: "#f59e0b", // amber — matches the "Embedded / Hardware" project category
    items: [
      "ESP32",
      "Microprocessor systems & interfacing",
      "Digital system design",
      "Analog circuit & filter design",
      "Battery systems & BMS",
      "KiCad",
      "Prototyping & electrical wiring",
      "Oscilloscope",
    ],
  },
  
  {
    title: "Tools",
    icon: "▣",
    color: "#10b981", // green — distinct from the other groups/categories
    items: [
      "Git / GitHub",
      "Linux / Unix shell",
      "SQL",
      "R",
      "React.js",
      "Playwright",
    ],
  },
];
