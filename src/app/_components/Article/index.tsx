import Image from 'next/image';
import Link from 'next/link';

import Category from '@/app/_components/Category';
import Date from '@/app/_components/Date';

import styles from './index.module.css';

import type { News } from '@/app/_libs/microcms';

type Props = {
  data: News;
};

const Article = ({ data }: Props) => {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Link className={styles.categoryLink} href={`/news/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          alt=""
          className={styles.thumbnail}
          height={data.thumbnail.height}
          src={data.thumbnail.url}
          width={data.thumbnail.width}
        />
      )}
      <div
        className={styles.content}
        // dangerouslySetInnerHTML は信頼できるデータのみに使用
        // 今回 dangerouslySetInnerHTML が受け取るデータは
        // microCMS のリッチエディタのデータであり
        // microCMS に不正ログインされない限りは信頼できるデータと言える
        // API キーの権限によっては不正なスクリプトが実行される可能性もあるので注意
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
};

export default Article;
