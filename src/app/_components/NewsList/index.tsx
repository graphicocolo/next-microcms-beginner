import Image from 'next/image';

import Category from '@/app/_components/Category';
import Date from '@/app/_components/Date';
import styles from '@/app/_components/NewsList/index.module.css';
import { News } from '@/app/_libs/microcms';

type Props = {
  news: News[];
};

const NewsList = ({ news }: Props) => {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li className={styles.list} key={article.id}>
          {/* TODO:別の章で、リンクと正式な画像に差し替えます */}
          <div className={styles.link}>
            <Image alt="No Image" className={styles.image} height={630} src="/no-image.png" width={1200} />
            <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
