import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },

  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Shobha',
    role: 'Software Developer',
  },

  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Dheeraj',
    role: 'Software Developer',
  },

  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Dhaksha',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="container">
    <nav className="navbar">
      <h2>Welcome to UserList</h2>
    </nav>
    <div className="list-container">
      <div className="card-container">
        <h1 className="title">User List</h1>
        <ul>
          {userDetailsList.map(eachItem => (
            <UserProfile userDetails={eachItem} key={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default App
