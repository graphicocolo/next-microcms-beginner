import styles from '@/app/_components/Sheet/index.module.css';

type Props = {
  children: React.ReactNode;
};

const Sheet = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Sheet;
