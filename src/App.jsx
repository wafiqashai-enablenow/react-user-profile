import { useContext, createContext } from 'react'

const UserContext = createContext()

function Header() {
  const user = useContext(UserContext)
  return (
    <header>
      <h1>Welcome {user.name}</h1>
    </header>
  )
}

function Profile() {
  const user = useContext(UserContext)
  return (
    <section>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </section>
  )
}

function Footer() {
  const user = useContext(UserContext)
  return (
    <footer>
      <p>Department: {user.department} </p>
    </footer>
  )
}

function App() {

  const user = {
    name: 'Wafiq',
    role: 'Intern',
    department: 'Software'
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        <Profile />
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App