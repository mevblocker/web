// next.config.mjs
import remarkGfm from "remark-gfm"
import createMDX from "@next/mdx"

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
        source: "/docs",
        destination:
          "https://docs.mevblocker.io?utm_source=mevblocker.io&utm_medium=web&utm_content=mev-blocker-docs-link",
        permanent: false,
      },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
