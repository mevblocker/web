import { PropsWithChildren } from "react";

import Head from "next/head";
import { CONFIG } from "@/src/const/meta";
import { Analytics } from "@/src/components/Analytics";

export type LayoutProps = PropsWithChildren<{
  pageTitle?: string;
}>;

export default function Layout({ children, pageTitle }: LayoutProps) {
  const { title } = CONFIG;
  const headTitle = pageTitle ? `${pageTitle} - ${title}` : `${title}`;

  return (
    <>
      {headTitle && (
        <Head>
          <title>{headTitle}</title>
        </Head>
      )}

      <div>
        <div>{children}</div>
        <Analytics />
      </div>
    </>
  );
}
