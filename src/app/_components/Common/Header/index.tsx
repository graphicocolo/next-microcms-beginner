import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/_components/Common/Header/index.module.css';
import Menu from '@/app/_components/Common/Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        <Image alt="SIMPLE" className={styles.logo} height={133} priority src="/logo.svg" width={348} />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
