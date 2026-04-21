# Contributing

Contributions are welcome. The goal is to keep Semanticus CSS:

- small
- consistent
- predictable

Before submitting:

- avoid adding heavy abstractions
- prefer composable utilities over components
- keep naming consistent and minimal

## Setup

- Install [Node.js](https://nodejs.org/) (v18 or higher recommended) if you haven't already.

- Clone the repository

```bash
git clone https://github.com/goncalvesjoao/semanticus-css.git
```

- Move into the project directory

```bash
cd semanticus-css
```

- Install dependencies

```bash
npm install
```

## Development

- Make changes to the source code in the `src` directory, and run:

```bash
npm run build
```

- Run a local server at `http://localhost:3000` with a demo page to see your changes in action

```bash
npm run demo
```

- Or run the **vitepress** dev server at `http://localhost:5173` to see your changes reflected in the docs

```bash
npm run docs:dev
```

## Visual Regression Testing

Semanticus CSS uses [BackstopJS](https://github.com/garris/BackstopJS) for visual regression testing.

- Capture reference snapshots

```bash
npm run test:snapshot
```

- Run visual regression tests against the reference snapshots

```bash
npm test
```

- Kill any leftover headless Chrome processes (if tests fail or hang)

```bash
npm run test:kill-zombies
```
