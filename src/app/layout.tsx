import '@/app/globals.css';
import Footer from '@/app/_components/Common/Footer';
import Header from '@/app/_components/Common/Header';
import { DEPLOYMENT_DOMAIN } from '@/app/_constants';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOYMENT_DOMAIN),
  title: {
    template: '%s | シンプルなコーポレートサイト',
    default: 'シンプルなコーポレートサイト',
  },
  description: '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
  openGraph: {
    title: 'シンプルなコーポレートサイト',
    description: '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: DEPLOYMENT_DOMAIN,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
