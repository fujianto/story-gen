# Story Gen

Generate storybook mdx files. Currently generate Colors.mdx to show list of available colors from tailwind.config.ts

### Prerequisites

1. Node &gt;=18.0.0
2. pnpm

1. Install pnpm

```bash
brew install pnpm
pnpm install story-gen
```

Then follow the step from the installation

2. Developing

Run this command to generate stories from component.

```bash
#pnpm start (tailwind.config.ts path) (Colors.mdx location)
pnpm start ./tests/tailwind.config.ts ../Colors.mdx
or

story-gen ./tests/tailwind.config.ts ../Colors.mdx
```