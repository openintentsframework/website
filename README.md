# openintents.xyz

Landing page for the [Open Intents](https://openintents.xyz) initiative — improving the cross-chain user experience on Ethereum while maintaining freedom and minimising trust.

## Prerequisites

- Node.js 20.x
- pnpm 10.24.0 or later

## Getting Started

1. **Install dependencies**

    ```bash
    pnpm install
    ```

2. **Start the development server**

    ```bash
    pnpm dev
    ```

3. **Build for production**

    ```bash
    pnpm build
    ```

4. **Preview the production build**
    ```bash
    pnpm preview
    ```

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Radix UI](https://www.radix-ui.com/) (Tooltip)
- [Lucide](https://lucide.dev/) icons
- TypeScript

## Project Structure

```
openintents/
├── public/              # Static assets (favicons, OG image, CNAME)
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI primitives (Button, Tooltip)
│   │   └── ...          # Page sections (Navbar, Hero, Footer, etc.)
│   ├── lib/             # Utility functions
│   ├── app.tsx          # Root application component
│   ├── main.tsx         # Entry point
│   └── globals.css      # Tailwind imports and design tokens
├── index.html           # HTML entry point with meta tags
└── vite.config.ts       # Vite configuration
```

## Deployment

The site is deployed to [GitHub Pages](https://pages.github.com/) and served at [openintents.xyz](https://openintents.xyz) via the `CNAME` file in `public/`.

The production build outputs static files to `dist/`.

## Contributing

This project is maintained by [Wonderland](https://wonderland.xyz). We welcome outside contributions.

- **Large changes** — please open an issue first to discuss your proposal.
- **Small changes** (bug fixes, typos, minor improvements) — PRs are welcome directly.

### Submitting a Pull Request

1. Fork the repo and create your branch from `main`.
2. Make your changes and ensure `pnpm build`, `pnpm lint`, and `pnpm format` pass.
3. Open your PR against `main` and describe your changes.

## License

This project is licensed under the MIT License.
