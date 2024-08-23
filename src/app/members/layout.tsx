import Sheet from '@/app/_components/Sheet';

import Hero from '../_components/Common/Hero';

export const metadata = {
  title: 'メンバー',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Hero sub="メンバー" title="Members" />
      <Sheet>{children}</Sheet>
    </>
  );
};

export default RootLayout;
