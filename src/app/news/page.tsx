import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';

const Page = async () => {
  // getNewsList で取得された contents プロパティの内容を
  // news という別名で受け取っている（分割代入）
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
};

export default Page;
