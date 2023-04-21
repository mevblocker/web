import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'

export default function Markdown({ mdxSource }) {
  return <MDXRemote {...mdxSource} />
}

export async function getStaticProps({ file }) {
  const filePath = path.join(process.cwd(), file)
  const content = fs.readFileSync(filePath, 'utf8')
  const mdxSource = await serialize(content)

  return {
    props: {
      mdxSource
    }
  }
}
