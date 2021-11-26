import { ContactForm } from '../app/contact/ContactForm';
import { ContactInfo } from '../app/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className='fade-in-effect'>
      <div className='contact'>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
