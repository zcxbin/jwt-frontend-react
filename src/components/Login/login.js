import './login.scss'

const Login = props => {
  return (
    <div className='login-container mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='content-left col-7'>
            <div className='branch'>ZCXBIN</div>
            <div className='detail'>
              ZCXBIN help you connect and share with the people in the world
            </div>
          </div>
          <div className='content-right col-5 d-flex flex-column gap-3 py-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Email Address or phone number'
            />
            <input
              type='password'
              className='form-control'
              placeholder='Password'
            />
            <button className='btn btn-primary'>Login</button>
            <span className='text-center'>Forgot your password?</span>
            <hr></hr>
            <div className='text-center'>
              <button className='btn btn-success'>Create new account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
