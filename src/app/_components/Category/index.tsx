import styles from '@/app/_components/Category/index.module.css';
import { CategoryInfo } from '@/app/_libs/microcms';

type Props = {
  category: CategoryInfo;
};

const Category = ({ category }: Props) => {
  return <span className={styles.tag}>{category.name}</span>;
};

export default Category;
