import { notFound } from 'next/navigation';

import Category from '@/app/_components/Category';
import NewsList from '@/app/_components/NewsList';
import { getNewsList, getCategoryDetail } from '@/app/_libs/microcms';

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news } = await getNewsList({
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>
      <NewsList news={news} />
    </>
  );
};

export default Page;
