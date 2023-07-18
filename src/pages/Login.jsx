import React from 'react'
import { useLoaderData, Form, redirect, useActionData, useNavigation, NavLink, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../features/slice/loginSlice';


const LoginPageStyled = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 
    
    div {
        width: 50%;
        max-width: 500px;
        padding: 1.3em;
        text-align: center;

        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(17.3px);
        -webkit-backdrop-filter: blur(17.3px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        h2 {
        color: red;
        font-weight: 500;
    }
        form {
            h5 {
                margin-top: .4em;
                a {
                    color: ${({theme}) => theme.colors.pop};
                }
            }
            button {
                padding: .6em;
                margin: 1.2em 0;
                border-radius: 5px;
                font-weight: 600;
                &:hover {
                    color: white;
                    background-color: red;
                }
            }
            section {
                display:flex;
                flex-direction: column;
                align-items: center;
                margin-top: 1.5em;
    
                input {
                    padding: .8em;
                    border-radius: 5px;
                    margin-top: .3em;
                    width: 80%;
                    max-width: 300px;
                    text-align: center;
                }
            }
        }

    }

`
export const loginLoader = ({request}) => {
    const url = new URL(request.url).searchParams;
    return (url.get('message'))
}


export default function Login() {
    const [formData, setFormData] = React.useState({email: '', password: ''});
    const [error, setError] = React.useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const registeredUsers = useSelector(state => state.logIn.users);
    const message = useLoaderData();
    
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(p => {
            return {...p, [name] : value};
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = formData.email;
        const password = formData.password;
        
        const currentUser = registeredUsers.find(item => item.email === email);
       
        if(currentUser) {
            const name = currentUser.name;
            if(currentUser.password === password) {
                dispatch(logIn())
                return navigate(`/project/products/?name=${name}`, {replace: true});
            }
            else{
                setError('Incorrect Password')
            }
            
        } else {
            setError('User does not exist')
        }

      }

    return (
    <LoginPageStyled>
        <div>
        <h1>Login</h1>
       
        {message && <h4 style={{color: 'red'}}>{message}</h4>}
            <form onSubmit={handleSubmit}>
                <section>
                <label>Email</label>
                <input 
                required
                type='email' 
                name='email'
                placeholder='Enter your email' 
                value={formData.email}
                onChange={handleChange}
                />
                </section>
                
                <section>
                <label>Password</label>
                <input 
                required
                type='password' 
                name='password'
                placeholder='Enter your password' 
                value={formData.password}
                onChange={handleChange}
                />
                </section>
                <h5>Haven't signed in? <NavLink to='/register'>Register</NavLink></h5>

                <button >Log in</button>
                {error && <h3>{error}</h3>}
            </form>     

        </div>
        
    </LoginPageStyled>
  )
}
