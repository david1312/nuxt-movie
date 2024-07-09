# Movie Info App Using Nuxt 3

# URL

This app is live! you can check on here : https://nuxt3-movie-app-dav13.netlify.app/

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Todo

Improvements that I think can be made, and I will do it as soon as possible in my free time

- [] Use Axios instead of the Fetch API and leverage its interceptor feature to add headers, so we don't need to add the token every time we make a request. Implement cancel token.
- [] Refactor constant URLs to use a base URL, so in case the base URL changes, we only need to update one file.
- [] Create a beautiful skeleton loader for images while they are still loading, and loading animation when search movie.
- [x] Implement a simple chat feature to chat with the admin and ask questions, just for fun.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
