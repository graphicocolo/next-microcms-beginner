import { notFound } from 'next/navigation';

import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';

type Props = {
  params: {
    current: string;
  };
};

const Page = async ({ params }: Props) => {
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) {
    return notFound();
  }
  const { contents: news, totalCount } = await getNewsList({
    // NEWS_LIST_LIMIT = 10
    limit: NEWS_LIST_LIMIT,
    // offset コンテンツの取得を開始する位置
    // current localhost:3000/p/current = 現在のページ数（何ページ目か）
    // offset = 0 の場合、最新1〜10件まで取得 10 * (1 - 1)
    // offset = 1 の場合、最新11〜20件まで取得 10 * (2 - 1)
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  if (news.length === 0) {
    return notFound();
  }
  return (
    <>
      <NewsList news={news} />
      <Pagination current={current} totalCount={totalCount} />
    </>
  );
};

export default Page;
