'use client';

import { useFormState } from 'react-dom';

import { createContactData } from '@/app/_actions/contact';
import styles from '@/app/_components/ContactForm/index.module.css';

const initialState = {
  status: '',
  message: '',
};

const ContactForm = () => {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === 'success') {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input className={styles.textfield} id="lastname" name="lastname" type="text" />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input className={styles.textfield} id="firstname" name="firstname" type="text" />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input className={styles.textfield} id="company" name="company" type="text" />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input className={styles.textfield} id="email" name="email" type="text" />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea className={styles.textarea} id="message" name="message" />
      </div>
      <div className={styles.actions}>
        {state.status === 'error' && <p className={styles.error}>{state.message}</p>}
        <input className={styles.button} type="submit" value="送信する" />
      </div>
    </form>
  );
};

export default ContactForm;
