import LoginBtn from './components/LoginBtn';

export default function Nav() {
  return (
    <>
      <nav className='nav'>
        <div className='nav__login'>
          <LoginBtn />
        </div>
      </nav>
    </>
  );
}
