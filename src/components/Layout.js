import styled from 'styled-components'

const LayoutStyled = styled.main`
    display: grid;
    @media screen and (min-width: 768px) {
        border: 1px solid red;
        min-block-size: 100vh;
        margin: auto;
        padding-inline: 20px;
        max-inline-size: 75rem;
        grid-template-columns: 278px 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        grid-template-areas: "profile filters" "profile repo-list";
    }
`

function Layout({ children }) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
