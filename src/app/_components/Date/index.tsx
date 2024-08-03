import Image from 'next/image';

import styles from '@/app/_components/Date/index.module.css';
import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
};

const Date = ({ date }: Props) => {
  return (
    <span className={styles.date}>
      <Image alt="" height={16} priority src="/clock.svg" width={16} />
      {formatDate(date)}
    </span>
  );
};

export default Date;
