import Image from 'next/image';

import styles from '@/app/_components/Date/index.module.css';

type Props = {
  date: string;
};

const Date = ({ date }: Props) => {
  return (
    <span className={styles.date}>
      <Image alt="" height={16} priority src="/clock.svg" width={16} />
      {date}
    </span>
  );
};

export default Date;
