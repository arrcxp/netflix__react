import './App.css';
import Movies__Poster from './components/Movies__Poster';
import ReasonToJoin from './components/ReasonToJoin';
import FreqOues from './components/FreqOues';

function App() {
  return (
    <div className="container">
      <header className='header__container'>  
        <nav className='nav__container'>
          <img src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'/>
          <div className='right__menu'>
            <select>
              <option value='en'>English</option>
              <option value='th'>Thailand</option>
            </select>
            <button >Sign In</button>
          </div>
        </nav>
        <section className='header__section__container'>
          <div className='header__section__box'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Starts at THB 99. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type='email' placeholder='Email address'/>
            <button>Get Start </button>
          </div>
        </section>
      </header>
      <section className='section-1__container'>
        <h1>Trending Now</h1>
        <div className='select__container'>
          <select>
            <option>Thailand</option>
            <option>Global</option>
          </select>
          <select>
            <option>Movies</option>
            <option>TV Shows</option>
          </select>
        </div>
      </section>
      <section className='section-2__container'>
        <Movies__Poster />
      </section>
      <section className='section-3__container'>
        <ReasonToJoin />
      </section>
      <section className='section-3__container'>
        <FreqOues />
      </section>

      <footer className='footer__container'>
        <h1>Ready to watch? Enter your email to create or restart your membership.</h1>\
        <div className='footer__input__btn'>
          <input type='email' placeholder='Email address'/>
          <button>Get Start</button>
        </div>
        <div className='footer__box'>
          <p>Questions? Call 1-800-012-298</p>
          <div className='footer__box__in'>
            <div className='footer__box__inner'>
              <a href='#'>FAQ</a><br/><br/>
              <a href='#'>Media Center</a><br/><br/>
              <a href='#'>Redeem Gift Cards</a><br/><br/>
              <a href='#'>Terms of Use</a><br/><br/>
              <a href='#'>Corporate Information</a><br/><br/>
              <a href='#'>Legal Notices</a><br/><br/>
            </div>
            <div className='footer__box__inner'>
              <a href='#'>Help Center</a><br/><br/>
              <a href='#'>Investor Relations</a><br/><br/>
              <a href='#'>Buy Gift Cards</a><br/><br/>
              <a href='#'>Privacy</a><br/><br/>
              <a href='#'>Contact Us</a><br/><br/>
              <a href='#'>Only on Netflix</a><br/><br/>
            </div>
            <div className='footer__box__inner'>
              <a href='#'>Account</a><br/><br/>
              <a href='#'>Jobs</a><br/><br/>
              <a href='#'>Ways to Watch</a><br/><br/>
              <a href='#'>ookie Preferences</a><br/><br/>
              <a href='#'>Speed Test</a><br/><br/>
            </div>
          </div>
          <div className='select__container'>
            <select>
              <option>English</option>
              <option>Thailand</option>
            </select>
        </div>
        </div>
        <h3>Netflix Thailand</h3>
      </footer>
    </div>
  );
}

export default App;
