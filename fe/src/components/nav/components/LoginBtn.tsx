import { btnpd } from '../../../util/util';

const btnfn = () => console.log('login');

export default function LoginBtn() {
  return (
    <>
      <button className='nav__login-btn' onClick={btnfn} onMouseDown={btnpd}>
        login
      </button>
      <button className='nav__login-btn' onClick={btnfn} onMouseDown={btnpd}>
        logout
      </button>
      <button className='nav__login-btn' onClick={btnfn} onMouseDown={btnpd}>
        status
      </button>
    </>
  );
}
