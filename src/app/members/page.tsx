import Image from 'next/image';

import { MEMBERS_LIST_LIMIT } from '@/app/_constants';
import { getMembersList } from '@/app/_libs/microcms';
import styles from '@/app/members/page.module.css';

const Page = async () => {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li className={styles.list} key={member.id}>
              <Image
                alt=""
                className={styles.image}
                height={member.image.height}
                src={member.image.url}
                width={member.image.width}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
