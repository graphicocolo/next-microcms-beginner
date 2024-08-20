import Hero from '@/app/_components/Common/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'お問い合わせ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero sub="お問い合わせ" title="Contact" />
      <Sheet>{children}</Sheet>
    </>
  );
}
