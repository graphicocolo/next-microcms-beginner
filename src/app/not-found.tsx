import ButtonLink from '@/app/_components/Common/ButtonLink';

import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
      <div className={styles.topLink}>
        <ButtonLink href="/">トップページへ</ButtonLink>
      </div>
    </div>
  );
};

export default NotFound;
