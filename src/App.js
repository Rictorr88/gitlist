import Layout from './components/layout'
import Profile from './components/profile'
import Filters from './components/filters'
import RepoList from './components/repo-list'
import Search from './components/search'
import repoData from './components/repo-data'
import { useState, useEffect } from "react"
import { getUser, getRepos } from "./services/users"



// const repoList = [
//   {
//     name: 'mi primer proyecto con react',
//     id: 123,
//   },
//   {
//     name: 'mi segundo proyecto con react',
//     id: 134,
//   }
// ]

function App() {
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])
    useEffect(() => {
      getUser('leonidasesteban').then(({data, isError}) => {
        if(isError) {
          console.log('No hemos encontrado a este cracksito')
          return
        }
        setUser(data)
      })
    }, [])
    useEffect(() => {
      getRepos('leonidasesteban')
    }, [])
  return (
    <Layout>
      <Profile {...user} />
      <Filters />
      <RepoList repoList={repos} />
      <Search />
    </Layout>
  );

}

export default App;
