/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a237e", // Primary color for branding
        secondary: "#757575", // Secondary color for branding
        accent: "#ff4081", // Accent color for highlighting elements
        background: "#f5f5f5", // Background color for the application
        surface: "#2D3748", // Surface color for cards or containers
        backgroundDark: "#1F2937",
        surfaceDark: "#FFFFFF",
        success: "#4caf50", // Color for success or confirmation messages
        warning: "#ffc107", // Color for warning or alert messages
        error: "#f44336", // Color for error or failure messages
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Primary font family
      },
      spacing: {
        "2px": "2px",
        "4px": "4px",
        "8px": "8px",
        "16px": "16px",
        "24px": "24px",
        "32px": "32px",
        "48px": "48px",
        "64px": "64px",
      },
      borderRadius: {
        default: "4px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
