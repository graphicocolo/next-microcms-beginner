import Image from 'next/image';

import ButtonLink from '@/app/_components/Common/ButtonLink';
import NewsList from '@/app/_components/NewsList';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';
import styles from '@/app/page.module.css';

const Home = async () => {
  // const sliceData = data.contents.slice(0, 2);
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
        </div>
        <Image alt="" className={styles.bgimg} height={1200} src="/img-mv.jpg" width={4000} />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
};

export default Home;
