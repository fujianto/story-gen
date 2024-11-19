import fs from 'fs';
import path from 'path';
import type { Config } from 'tailwindcss';

// Helper function to format color data for ColorItem
function formatColorItems(colorConfig: Record<string, string | Record<string, string>>): string {
    return Object.entries(colorConfig)
        .map(([key, value]) => {
            if (typeof value === 'string') {
                return `<ColorItem title="theme.color.${key}" subtitle="${capitalizeFirstLetter(key)}" colors={{ ${key}: '${value}' }} />`;
            } else if (typeof value === 'object') {
                const colorVariants = Object.entries(value)
                    .map(([variantKey, colorValue]) => `${variantKey}: '${colorValue}'`)
                    .join(', ');
                return `<ColorItem title="theme.color.${key}" subtitle="${capitalizeFirstLetter(key)}" colors={{ ${colorVariants} }} />`;
            }
            return '';
        })
        .join('\n\n\t');
}

// Helper function to capitalize the first letter
function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Async function to generate Colors.mdx
export async function generateColorsMDX(tailwindConfigPath: string, outputPath: string): Promise<void> {
    const { default: tailwindConfig } = (await import(path.resolve(tailwindConfigPath ?? './tests/tailwind.config.ts'))) as { default: Config };
    const colorItems = tailwindConfig.theme && tailwindConfig.theme.colors
        ? formatColorItems(tailwindConfig.theme.colors as Record<string, string | Record<string, string>>)
        : '';
    const content = `import { Meta, ColorPalette, ColorItem } from '@storybook/blocks';

<Meta title="Colors" />

<ColorPalette>
	${colorItems}
</ColorPalette>
`;

    // Write the content to the specified output path
    fs.writeFileSync(path.resolve(outputPath), content, 'utf8');
    console.log(`Colors.mdx has been generated at ${outputPath}.`);
}