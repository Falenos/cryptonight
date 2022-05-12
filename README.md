## What to expect

Build with the assumption that we expect high traffic, we are interested in SEO and prefer writes than reads for heavy perations. Also, we assume that it is better to have a few seconds old data but provide a faster experience. Thats one of the reasons for avoiding client-side-rendering and use caching mechanisms.
This app contais 2 pages: Homepage and CoinDetails page.

### Homepage

Static page refreshed for all our readers every 20secs (if there is a request from a client).

Contains a client search along with the CoinsTable with pagination. Whenever we hit the last 2 pages we fetch 10 extra pages (100 coins) of data on the client.

These data are not persisted currently so when the user revisits he will see only 10 pages of coins. There are ways to solve this (using store, lifting state to \_app.tsx, sending hidden route params to getStaticProps e.tc. but I did not have time to experiment with them. The strategy differs in case we have users in the future or not, if we switch to SSR with cache or keep it static and so on...

There is a time-stamp as well to verify the cache. To see this working run the project with [`npm run build`] and [`npm run start`].

### CoinsTable

Server side rendered page with Cache-Control for the experiment, could also be static.

Contains various data fetced on the server and a coin-chart that works on the client.

### Issues and Stack

Stack: Styled components, Material-UI v5, Babel, chart.js
There is an issue with babel material-ui and styled-components that I was not able to solve and maybe it's not solvable at the project level. You can see a warning when running on dev mode.

Babel makes things much slower, was necessary for styled though.

Some code splitting, type checking and code is still immature, sorry!!

Nextjs material-ui styled-components, new to all these, hope that my practices are not the worst! Anyway enjoy.

## Generic info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Analyze

To check the bundle size run:

```bash
ANALYZE=true npm run build
# or
npm run analyse
# or
ANALYZE=true yarn build
```
