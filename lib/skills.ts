// Keep this honest — only list things you can discuss in an interview.
export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "TypeScript", "Verilog", "Rust", "SQL"],
  },
  {
    title: "Embedded & Hardware",
    items: [
      "STM32 / ARM Cortex-M",
      "FreeRTOS",
      "Bare-metal firmware",
      "I2C / SPI / UART",
      "FPGA (Vivado)",
      "KiCad",
      "Oscilloscope / logic analyzer",
    ],
  },
  {
    title: "AI & ML",
    items: [
      "PyTorch",
      "NumPy / pandas",
      "Hugging Face Transformers",
      "Model training & evaluation",
      "LLM application development",
      "RAG",
    ],
  },
  {
    title: "Tools & Infra",
    items: [
      "Git",
      "Linux",
      "Docker",
      "CI/CD (GitHub Actions)",
      "AWS / Vercel",
      "PostgreSQL",
    ],
  },
];
