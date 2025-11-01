
import { useState } from 'react';

type User = {
  name: string;
  email: string;
}

const useStateTypescript = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState<User | null>(null);

  const  handleLogin = () => {
    setUser({
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    });
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  }
  return (
    <div>
    <button onClick={() => handleLogin()}>
    Logged In
    </button>
    <button onClick={() => handleLogout()}>
    Logged Out
    </button>
    <p>
    User is {isLoggedIn ? 'logged in' : 'logged out'}
    </p>
    <p>User name is {user?.name}</p>
    <p>User email is {user?.email}</p>
    </div>
  )
}

export default useStateTypescript