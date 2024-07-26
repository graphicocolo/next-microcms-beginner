import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/_components/Common/Header/index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        <Image alt="SIMPLE" className={styles.logo} height={133} priority src="/logo.svg" width={348} />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
