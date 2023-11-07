import styled from 'styled-components'
import Language from './language'

const RepoItemStyled = styled.div`
    padding-block: 1rem;
    border-block-end: 1px solid var(--grey);
    display: flex;
    gap: 1rem;
    flex-direction: column;
    &:last-child {
        border-block-end: none;
    }
    .title {
        display: flex;
        gap: 1rem;
        margin: 0;
        a {
            color: var(--primary);
            text-decoration: none;
        }
    }
    .public {
        border: 1px solid var(--grey);
        padding-inline: .5rem;
        padding-block: .125rem;
        font: var(--caption-regular);
        border-radius: .5rem;
    }
    .description {
        margin: 0;
        font: var(--body2-regular);
    }
    .topicList {
        display: flex;
        gap: .25rem;
    }
    .topicItem {
        color: var(--primary);
        background: #15223A;
        font: var(--caption-medium);
        padding-inline: .75rem;
        padding-block: .25rem;
        border-radius: 32px;
    }
`

function RepoItem(props) {
    return (
        <RepoItemStyled>
            <h3 className="title">
            <a href={props.html_url}>
            {props.name}
            </a>
            {
                !props.private ? (
                    <span className='public' >Public</span>
                ) : null
            }
            </h3>
            {
                props.description ? (
                    <p className='description'>
                        {props.description}
                    </p>
                ) : null
            }
            {
                props.topics.length ? (
                    <div className="topicList">
                        {
                        props.topics.map(item => <span className='topicItem' >{item}</span>)
                        }
                    </div>
                ) : null
            }
            {
                props.language ? <Language name={props.language} /> : null
            }
        </RepoItemStyled>
    )
}

export default RepoItem
