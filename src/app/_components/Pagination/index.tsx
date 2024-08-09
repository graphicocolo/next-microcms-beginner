import Link from 'next/link';

import { NEWS_LIST_LIMIT } from '@/app/_constants';

import styles from './index.module.css';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

const Pagination = ({ totalCount, current = 1, basePath = '/news' }: Props) => {
  // ページ番号の配列を作成 今回はこういった配列[1, 2, 3, 4, 5]
  //Array.from 第一引数から配列生成、第二引数に指定した関数で配列の各要素に処理を加えることができる
  // Math.ceil(全投稿数 / 1ページあたりの投稿表示件数)
  //{ length: ... }という配列風オブジェクトから、長さがMath.ceil(全投稿数 / 1ページあたりの投稿表示件数)の配列生成
  // 配列のインデックスを利用して、配列各要素にi + 1の計算結果を格納
  const pages = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }, (_, i) => i + 1);

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {current !== p ? (
              <Link className={styles.item} href={`${basePath}/p/${p}`}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
