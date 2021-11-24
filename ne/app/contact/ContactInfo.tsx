import s from './contactInfo.module.scss';

export function ContactInfo() {
  return (
    <div className={s.info}>
      <h1 className={s.title}>Find Me Here Also:</h1>
      <div className={s.infoGroup}>
        <div>mattpmannion@gmail.com</div>
        <div>772-564-1044</div>
      </div>
      <div>Can't wait to hear from you!</div>
    </div>
  );
}
