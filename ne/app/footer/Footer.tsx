import s from './footer.module.scss';

export function Footer() {
  return (
    <>
      <div className={s.footer}>
        <p>&copy; {new Date().getFullYear()} - Matt Mannion</p>
      </div>
    </>
  );
}
