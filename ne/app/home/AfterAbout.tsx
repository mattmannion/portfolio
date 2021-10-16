import { AccentLink } from '../../components/AccentLink';

export function AfterAbout() {
  return (
    <div className='after'>
      <section className='after__contact'>
        <p>Interested in working with Me?</p>
        <p>Reach out below!</p>
      </section>
      <AccentLink HREF='/contact' name='Contact Me' />
    </div>
  );
}
