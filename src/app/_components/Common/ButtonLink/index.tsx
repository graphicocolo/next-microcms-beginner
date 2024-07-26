import styles from '@/app/_components/Common/ButtonLink/index.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
};

const ButtonLink = ({ href, children }: Props) => {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
};

export default ButtonLink;
