import '@/app/globals.css';
import Footer from '@/app/_components/Common/Footer';
import Header from '@/app/_components/Common/Header';

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
