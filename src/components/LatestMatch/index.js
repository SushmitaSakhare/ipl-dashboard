// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details">
              <p className="team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-status">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-match-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info">
              <p className="details-label">First Innings</p>
              <p className="details-value">{firstInnings}</p>
            </div>
            <div className="match-info">
              <p className="details-label">Second Innings</p>
              <p className="details-value">{secondInnings}</p>
            </div>
            <div className="match-info">
              <p className="details-label">Man Of The Match</p>
              <p className="details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info">
              <p className="details-label">Umpires</p>
              <p className="details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
