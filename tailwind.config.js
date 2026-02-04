/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Patriotic American Theme for BullyFashion101 LLC
                'primary': '#1E3A8A',        // Navy Blue (Primary brand color)
                'primary-dark': '#1E293B',   // Darker navy for text
                'secondary': '#DC2626',      // Patriotic Red
                'secondary-dark': '#B91C1C', // Deep Red for accents
                'accent': '#3B82F6',         // Light Blue
                'accent-light': '#60A5FA',   // Lighter blue for hover
                
                // Background colors
                'bg-light': '#F8FAFC',       // Soft white/gray for light mode
                'bg-dark': '#0F172A',        // Dark navy for dark mode
                
                // Text colors
                'text-primary': '#1E293B',   // Dark slate for main text
                'text-secondary': '#64748B', // Slate gray for secondary text
                'text-light': '#94A3B8',     // Light gray for muted text
                
                // Supporting colors
                'border-light': '#E2E8F0',   // Light borders
                'border-dark': '#334155',    // Dark borders
            },
        },
    },
    plugins: [],
}
