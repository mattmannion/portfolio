export function About() {
  return (
    <>
      <main className='about'>
        {/* section a */}
        <div className='about__grid-item'>
          <div className='about__title'>About Me</div>
          <p className='about__body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
            odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
            facere!
          </p>
        </div>
        <div className='about__grid-item'>
          <div className='about__image'>a picture</div>
        </div>

        {/* section b */}
        <div className='about__grid-item'>
          <div className='about__image'>a picture</div>
        </div>
        <div className='about__grid-item'>
          <div className='about__title'>My Work</div>
          <p className='about__body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
            odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
            facere!
          </p>
        </div>

        {/* section C */}
        <div className='about__grid-item'>
          <div className='about__title'>My Blog</div>
          <p className='about__body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            optio tempora nostrum vero, sed neque dolor unde! Quod, delectus
            odio blanditiis rem ducimus cum ipsam voluptates quam impedit quia
            facere!
          </p>
        </div>
        <div className='about__grid-item'>
          <div className='about__image'>a picture</div>
        </div>
      </main>
    </>
  );
}
