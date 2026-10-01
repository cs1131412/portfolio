// Home page: welcome message, mission statement, and buttons leading to other pages.
import { Link } from 'react-router-dom'
import profile from '../data/profile.js'

function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">{profile.headline}</p>
        <h1>Hi, I&apos;m {profile.legalName}</h1>
        <p className="lead">{profile.welcomeMessage}</p>

        <div className="button-row">
          <Link to="/about" className="button">About Me</Link>
          <Link to="/projects" className="button button-secondary">View My Projects</Link>
        </div>
      </section>

      <section className="panel">
        <h2>Mission Statement</h2>
        <p>{profile.missionStatement}</p>
      </section>
    </>
  )
}

export default Home
