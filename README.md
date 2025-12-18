# 🌳 Interactive Tree Visualizer

An interactive **tree-structure visualizer** built using **React** and **@xyflow/react (React Flow)**.  
The application displays hierarchical data with proper spacing, centered parent–child relationships, and smooth expand/collapse interactions — all fully client-side.

---

## 📌 Overview

This project visualizes hierarchical data (like organizational trees or file structures) in a clean and interactive way.  
It automatically calculates layout, avoids node overlap, and supports user interactions such as expand/collapse, hover highlighting, selection, search, and auto-zoom.

---

## 🚀 Features

### Core Features
- Recursive tree layout with clean spacing
- Parent nodes centered above children
- Edges connecting parent and child nodes
- Expand / Collapse functionality
- Dynamic layout recalculation
- Fully client-side (no backend)

### Bonus Features
- Hover highlighting for nodes and edges
- Node selection with visual feedback
- Smooth expand/collapse animations
- Node metadata display
- Search and highlight functionality
- Auto pan and zoom for large trees

---

## 🧩 Tech Stack

- **React (18.x)**
- **@xyflow/react** (React Flow)
- **React-Bootstrap**
- **JavaScript (ES6+)**
- **CSS Transitions**

---

## 🛠️ Setup & Installation

### Clone the repository
```bash
git clone https://github.com//Apoorv0207/trre-Visualizer.git
cd tree-visualizer
npm install
npm run dev



## 📂 Project Structure

```text
tree-visualizer/
├── src/
│   ├── components/
│   │   ├── TreeFlow.jsx      # Main tree visualization logic
│   │   └── TreeNode.jsx      # Custom node UI
│   │
│   ├── data/
│   │   └── treeData.js       # Hierarchical tree data
│   │
│   ├── utils/
│   │   └── layout.js         # Recursive layout calculation
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots/              # Screenshots / GIFs (add here)
│
├── README.md
├── package.json
