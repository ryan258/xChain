# xChain Project

xChain is an innovative educational framework designed to teach AI concepts and agent chain composition using analogies from Magic: The Gathering (MTG). This project aims to help former MTG players, particularly those familiar with the early 2000s Extended format, understand and create AI systems by leveraging familiar game concepts.

## Project Overview

xChain uses a modular, component-based framework for building AI agent chains. It teaches AI concepts through MTG analogies, focusing on composition over coding. The project implements a test-driven development approach and utilizes object-oriented programming principles for clear, maintainable code.

## Main Features

- Modular AI Components (analogous to MTG card types)
- Composition System for combining components
- Resource Management system
- Interactive Tutorial System
- Comprehensive Documentation
- Extensive Logging System for development and user interactions

## Target Audience

- Former Magic: The Gathering players, particularly those familiar with the early 2000s Extended format
- Beginners in AI and programming
- Individuals interested in learning about AI through gamified concepts

## Technology Stack

- Backend: Node.js with TypeScript
- Testing Framework: Jest
- AI Integration: Ollama with "llama3.1:latest" model
- Logging: Custom logging system with file and console outputs
- Version Control: Git
- Documentation: Markdown and TypeDoc

## Development Roadmap

The project is developed in six main phases:

1. Project Setup and Core Infrastructure
2. Core Gameplay Components
3. AI Integration
4. Tutorial System
5. Advanced Features and Optimization
6. Documentation and Polish

Throughout all phases, we maintain continuous tasks such as updating the roadmap, regular code commits, documentation updates, and log analysis.

For a detailed roadmap, please see the `ROADMAP.md` file in the project repository.

## Logging System

xChain implements a comprehensive logging system that captures:

- Development prompts and commands
- System responses and outputs
- User interactions and progress in tutorials
- AI operations and decisions

This logging system serves multiple purposes:
- Tracking development progress
- Debugging and error tracing
- Performance optimization
- Generating insights for project improvement

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/xchain.git
   cd xchain
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run tests:
   ```
   npm test
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

```
xchain/
├── src/             # Source code
│   ├── components/  # AI components (Creatures, Instants, etc.)
│   ├── models/      # AI model implementations
│   ├── core/        # Core classes (Deck, Chain, Mana)
│   ├── utils/       # Utility functions
│   ├── tutorials/   # Tutorial system
│   └── logging/     # Logging system
├── tests/           # Test files
├── docs/            # Documentation
├── logs/            # Log files
└── config/          # Configuration files
```

## Usage

To start using xChain:

1. Complete the installation steps above.
2. Run `npm run tutorial` to start the interactive tutorial system.
3. Follow the on-screen instructions to learn about AI concepts through MTG analogies.
4. Experiment with creating your own AI chains using the provided components.

Detailed usage examples and API documentation can be found in the `docs/` directory.

## Contributing

We welcome contributions to the xChain project! Please read our `CONTRIBUTING.md` file for guidelines on how to submit issues, feature requests, and pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

- Inspired by Magic: The Gathering and its Extended format
- Thanks to the AI and MTG communities for their invaluable insights
- Gratitude to all contributors and testers

## Contact

For questions, feedback, or support:
- Open an issue on this repository
- Contact the project maintainers at xchain@example.com
- Join our community Discord server: [link to Discord]

---

Remember to star this repository if you find it helpful, and happy learning!