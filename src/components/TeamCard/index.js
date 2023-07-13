// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img className="team-card-img" src={teamImageUrl} alt={name} />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
