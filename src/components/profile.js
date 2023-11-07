import styled from 'styled-components'
import props from './profile-data'

const ProfileStyled = styled.div`
  grid-area: profile;
  /* background-color: yellow; */
  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin-block-end: auto.5rem;
  }
  .username {
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-light);
  }
  .info {
    /* border: 1px solid purple; */
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }
`

function Profile() {
  const { name, login, avatar_url, bio, followers } = props
  return (
    <ProfileStyled>
      <img src="{avatar_url}" className='avatar' width="278" height="278" alt="" />
      <p className="name">{name}</p>
      <p className="Username">{login}</p>
      <div className="button">
        <button>follow</button>
        <button>sponsors</button>
      </div>
      <p className="bio info"> {bio} </p>
      <p className="followers info">
        * {followers} <span>followers</span> <span>*</span> 15 <span>following</span>
      </p>
      <p  className="stars info">* 81</p>
      <p className="location">* Tampico</p>
      <a className='info' href="https://rictor.com.mx" target="_blank" rel="noreferrer">
        https://rictor.com.mx
      </a>
      <a className='info' href="https://rictor.com.mx" rel="noreferrer">
        @rictor88
      </a>
    </ProfileStyled>
  );
}

export default Profile
