import { MetadataRoute } from 'next';

import { DEPLOYMENT_DOMAIN } from '@/app/_constants';

import { getAllCategoryList, getAllNewsList } from './_libs/microcms';

const buildUrl = (path?: string) => `${DEPLOYMENT_DOMAIN}${path ?? ''}`;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map((content) => ({
    url: buildUrl(`/news/category/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/members'),
      lastModified: now,
    },
    {
      url: buildUrl('/contact'),
      lastModified: now,
    },
    {
      url: buildUrl('/news'),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
};

export default sitemap;
