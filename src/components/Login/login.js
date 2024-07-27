import './login.scss'

const Login = props => {
  return (
    <div className='login-container'>
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
            <span className='text-center'>
              <a href='#' className='forgot-password'>
                Forgot your password?
              </a>
            </span>
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
