# Interactive Graph Dashboard

A modern, interactive graph visualization dashboard built with React and React Flow. This application allows users to create, manage, and visualize service relationships in a dynamic graph interface.

## Features

- 🎯 Interactive Graph Visualization
  - Drag and drop nodes
  - Connect services with animated edges
  - Zoom and pan functionality
  - MiniMap for navigation
  - Customizable background patterns

- 📊 Service Management
  - Add new services with detailed metrics
  - Delete services and connections
  - Real-time service status monitoring
  - Traffic, error rate, and latency tracking

- 🔍 Search & Filter
  - Real-time search functionality
  - Filter services by name and description
  - Visual status indicators

- 🎨 Modern UI
  - Dark theme with custom color scheme
  - Responsive design
  - Interactive tooltips
  - Smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd InteractiveGraph
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage Guide

### Adding a New Service
1. Click the "Add Node" button in the control panel
2. Click on the new node to open the data input modal
3. Fill in the service details:
   - Service Name
   - Description
   - Traffic percentage
   - Error rate
   - Latency
   - Status
4. Click "Save" to update the node

### Connecting Services
1. Click and drag from one node's handle to another
2. The connection will be animated by default

### Managing Services
- **Delete a Service**: Select the service and press Backspace
- **Delete a Connection**: Select the connection and press Backspace
- **Search Services**: Use the search bar in the control panel
- **Change Background**: Select a pattern from the dropdown menu

## Project Structure

```
myapp/
├── src/
│   ├── components/
│   │   ├── CustomNode.jsx    # Custom node component
│   │   └── NodeModal.jsx     # Data input modal
│   ├── data/
│   │   └── jsonData.js       # Initial graph data
│   ├── pages/
│   │   └── Dashboard.jsx     # Main dashboard component
│   └── App.jsx              # Root component
└── package.json
```

## Technologies Used

- React
- React Flow (@xyflow/react)
- Tailwind CSS
- Vite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments

- React Flow for the graph visualization library
- Tailwind CSS for the styling framework
- Vite for the build tool
