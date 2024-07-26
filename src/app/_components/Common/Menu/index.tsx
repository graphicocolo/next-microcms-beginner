'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import styles from './index.module.css';

const Menu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClickIsOpen = () => setOpen(true);

  const handleClickIsClose = () => setOpen(false);

  // メニュー内のリンクをクリックしたら setOpen が false になるようにしなくてはならない
  // 下記でも一応は動作するが、メニューが閉じた直後は遷移前のページが一瞬表示される
  return (
    <div>
      <nav className={isOpen ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={handleClickIsClose}>
              ニュース
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={handleClickIsClose}>
              メンバー
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleClickIsClose}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button className={`${styles.button} ${styles.close}`} onClick={handleClickIsClose}>
          <Image alt="閉じる" height={24} priority src="/close.svg" width={24} />
        </button>
      </nav>
      <button className={styles.button} onClick={handleClickIsOpen}>
        <Image alt="メニュー" height={24} src="/menu.svg" width={24} />
      </button>
    </div>
  );
};

export default Menu;
