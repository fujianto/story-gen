#!/usr/bin/env ts-node

import { generateColorsMDX } from "./generateColors";
export const StoryGen = {
    generateColorsMDX: generateColorsMDX
}

const main = () => {
    // Get command-line arguments
    const args = process.argv.slice(2);
    const [tailwindConfigPath, outputPath] = args;

    // Validate input arguments
    if (!tailwindConfigPath || !outputPath) {
        console.error('Error: Please provide both the path to the Tailwind config file and the output path for the MDX file.');
        console.error('Usage: npx ts-node generateColorsMDX.ts <tailwindConfigPath> <outputPath>');
        process.exit(1);
    }

    // Run the function
    StoryGen.generateColorsMDX(tailwindConfigPath, outputPath).catch((error) => console.error('Error generating Colors.mdx:', error));
}

main();
