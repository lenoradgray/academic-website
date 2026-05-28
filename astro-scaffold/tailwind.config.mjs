/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Brand palette — see brief
        forest:  '#2D4A3E',
        rust:    '#B5552D',
        ochre:   '#D9A441',
        cream:   '#F5F0E6',
        paper:   '#FAF7F1',
        ink:     '#1F1B16',
        stone:   '#5C544A',
        sand:    '#A89E8E',

        // Dark-mode parallels (optional — used by [data-theme=dark])
        'dark-bg':      '#1A1612',
        'dark-surface': '#221D17',
        'dark-text':    '#ECE5D6',
        'dark-muted':   '#9C9385',
        'dark-heading': '#B8CFC2',
        'dark-accent':  '#D87B53',

        // Semantic aliases
        bg:        '#F5F0E6',
        surface:   '#FAF7F1',
        accent:    '#B5552D',
        highlight: '#D9A441',
        border:    'rgba(168, 158, 142, 0.42)',
      },
      fontFamily: {
        serif: [
          'Fraunces',
          'Iowan Old Style',
          'Palatino Linotype',
          'Georgia',
          'serif',
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SF Mono',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        // Editorial display sizes — clamp values defined in global.css too
        'display': ['clamp(44px, 6.5vw, 68px)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'h1':      ['clamp(36px, 4.5vw, 48px)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'h2':      ['clamp(24px, 2.6vw, 30px)', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        'lead':    ['clamp(20px, 2.2vw, 23px)', { lineHeight: '1.45' }],
      },
      maxWidth: {
        'measure': '62ch',
        'main':    '880px',
      },
      borderColor: {
        DEFAULT: 'rgba(168, 158, 142, 0.42)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
