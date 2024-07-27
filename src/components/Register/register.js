import './register.scss'
import { useHistory } from 'react-router-dom'

const Register = props => {
  const history = useHistory()
  const handleLogin = () => {
    history.push('/login')
  }
  return (
    <div className='register-container'>
      <div className='container'>
        <div className='row px-3 px-sm-0'>
          <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
            <div className='branch'>ZCXBIN</div>
            <div className='detail'>
              ZCXBIN help you connect and share with the people in the world
            </div>
          </div>
          <div className='content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3'>
            <div className='branch d-sm-none'>ZCXBIN</div>
            <div className='form-group'>
              <label>Email:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Email address'
              />
            </div>
            <div className='form-group'>
              <label>Phone Number:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Phone number'
              />
            </div>
            <div className='form-group'>
              <label>Username:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Username'
              />
            </div>
            <div className='form-group'>
              <label>Password:</label>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <label>Re-enter Password:</label>
              <input
                type='password'
                className='form-control'
                placeholder='Re-enter password'
              />
            </div>
            <button className='btn btn-primary'>Register</button>
            <hr></hr>
            <div className='text-center' onClick={() => handleLogin()}>
              <button className='btn btn-success'>
                Already have an account. Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
