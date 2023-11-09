import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'

const FiltersStyled = styled.div`
  grid-area: filters;
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
  }
  .count {
    font: var(--headñine2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }

`

function Filters({repoListCount, setSearch}) {
    function handleChange(event) {
      setSearch(event.target.value);
    }
  return (
    <FiltersStyled>
     <h2 className="count" >
      Repositorios {repoListCount}
     </h2>
    <div className="action-list">
      <InputText 
        placeholder="Busca un repositorio"
        type="search"
        onChange={handleChange}
      />
      <div className="select-list">
      <Selector>
        <option value="all" >Todo</option>
        <option value="forks">forks</option>
      </Selector> 
      <Selector>
        <option value="Lenguaje" disabled>Lenguaje</option>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="Javascript">Javascript</option>
      </Selector> 
      <Selector>
        <option value="Ordenar" disabled >Ordenar</option>
        <option value="Stars">Estrellas</option>
      </Selector> 
      </div>
    </div>
    <Separator />
    </FiltersStyled>
  )
}
 
export default Filters
