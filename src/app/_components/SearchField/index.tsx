'use client'; // ユーザーの操作によって UI を更新したい場合などは、クライアントコンポーネントを利用する必要がある

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import styles from '@/app/_components/SearchField/index.module.css';

const SearchFieldComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // handleSubmit の処理の流れ
  // フォームイベントのデフォルト動作をキャンセル
  // 入力された値を取得
  // 検索ページに遷移
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // フォームデフォルト動作をキャンセル（サーバーへフォームの内容を送信しない）
    const q = e.currentTarget.elements.namedItem('q'); // input要素を取得
    if (q instanceof HTMLInputElement) {
      // URLSearchParams WebAPI の1つ
      // URL クエリパラメータの操作に役立つ 用意されているメソッドが使える
      const params = new URLSearchParams();
      // qという名前のパラメータに qの値をセット（空白を削除した上で）
      // /news/search?q=ユーザーが入力した値 というURLに遷移させるための準備
      params.set('q', q.value.trim());
      router.push(`/news/search?${params.toString()}`); // pushメソッドでページ遷移
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.search}>
        <Image alt="検索" height={16} loading="eager" src="/search.svg" width={16} />
        <input
          className={styles.searchInput}
          defaultValue={searchParams.get('q') ?? undefined}
          name="q"
          placeholder="キーワードを入力"
          type="text"
        />
      </label>
    </form>
  );
};

const SearchField = () => {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
};

export default SearchField;
