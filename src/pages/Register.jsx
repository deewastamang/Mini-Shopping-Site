import React from 'react'
import { styled } from 'styled-components'
import { Form, Link, useNavigate } from 'react-router-dom'
import { addUser } from '../features/slice/loginSlice';
import { useDispatch } from 'react-redux';


const RegisterStyled = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 60%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.2);
    padding: 1em;
    border-radius: 20px;

    h5 {
      text-align: center;
      a {
        color: ${({theme}) => theme.colors.pop};
      }
    }

    h1 {
      text-align: center;

    }

    form {
      display:flex;
      flex-direction: column;
      margin-top: .5em;

      input {
        margin-top: .7em;
        padding: .7em;
        border-radius: 5px;
        text-align: center;
      }
      label {
        text-align: center;
      }

      button {
        padding: .8em;
        font-weight: 500;
        margin: .7em auto;
        max-width: 100px;
        border-radius: 5px;
        color: ${({theme}) => theme.colors.font};
        background-color: ${({theme}) => theme.colors.bg};
        &:hover {
          color: ${({theme}) => theme.colors.pop};
          background-color: ${({theme}) => theme.colors.bg}
        }
      }
    }
  }
`

export default function Register() {
  const [formData, setFormData] = React.useState({name: '', email: '', password: '', confirmPassword: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(p => {
      return {...p, [name] : value};
    })
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      const name = formData.name;
      const email = formData.email;
      const password = formData.password;
      const confirmPassword = formData.confirmPassword;
      if(password !== confirmPassword) {
        return alert("your password doesn't match")
      }
      const user = {email, password, name};
      dispatch(addUser({name, email, password}));
      return navigate('/login', {replace: true})

    }

  
  return (
    <RegisterStyled>
        <div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit} replace>
            <label>Name</label>
            <input 
            required 
            type='text'
            name='name' 
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name" />

            <label>email</label>
            <input 
            required 
            type='email' 
            name='email' 
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email' />

            <label>password</label>
            <input 
            required 
            type='password' 
            name='password' 
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password " />

            <label>Confirm Password</label>
            <input 
            required 
            type='password' 
            name='confirmPassword' 
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='Enter password again' />
            
            <button>submit</button>
          </form>
          <h5>Already registerd? <Link to='/login'> Log in</Link></h5>
        </div>
    </RegisterStyled>
  )
}
