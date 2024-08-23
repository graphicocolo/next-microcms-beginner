import Hero from '@/app/_components/Common/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'ニュース',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

const NewsLayout = ({ children }: Props) => {
  return (
    <>
      <Hero sub="ニュース" title="News" />
      <Sheet>{children}</Sheet>
    </>
  );
};

export default NewsLayout;
