import s from './contact.module.scss';
import { ContactForm } from '/app/contact/ContactForm';
import { ContactInfo } from '/app/contact/ContactInfo';

export function Contact() {
  return (
    <div className={s.contact}>
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
