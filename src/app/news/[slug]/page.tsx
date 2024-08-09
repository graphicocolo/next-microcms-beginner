import { notFound } from 'next/navigation';

import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/Common/ButtonLink';
import { getNewsDetail } from '@/app/_libs/microcms';
import styles from '@/app/news/[slug]/page.module.css';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

const Page = async ({ params, searchParams }: Props) => {
  // 動的ルーティングで404ページを指定するにはnotFound関数を利用
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
};

export default Page;
