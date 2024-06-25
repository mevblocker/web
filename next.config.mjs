// next.config.mjs
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const NEW_MEW_BLOCKER_URL = 'https://cow.fi/mev-blocker'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: '/',
        destination: NEW_MEW_BLOCKER_URL,
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: NEW_MEW_BLOCKER_URL,
        permanent: true,
      },
      {
        source: '/cookie-policy',
        destination: NEW_MEW_BLOCKER_URL,
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: NEW_MEW_BLOCKER_URL,
        permanent: true,
      },
      {
        source: '/docs',
        destination: NEW_MEW_BLOCKER_URL,
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);