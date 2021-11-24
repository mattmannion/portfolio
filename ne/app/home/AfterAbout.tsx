import s from './afterAbout.module.scss';
import { AccentLink } from '/components/AccentLink';

export function AfterAbout() {
  return (
    <div className={s.after}>
      <section className={s.contact}>
        <p>Interested in working with Me?</p>
        <p>Reach out below!</p>
      </section>
      <AccentLink HREF='/contact' name='Contact Me' />
    </div>
  );
}
