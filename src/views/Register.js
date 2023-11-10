// ** React Imports
// import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
// import useJwt from '@src/auth/jwt/useJwt'

// ** Store & Actions
// import { useDispatch } from 'react-redux'
// import { handleLogin } from '@store/authentication'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// ** Context
// import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Label, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import { useState } from 'react'

const defaultValues = {
    email: '',
    terms: false,
    username: '',
    password: ''
}
const baseURL = 'http://localhost:5000'

const Register = () => {
    const history = useHistory()
    const [errorMsg, setErrorMsg] = useState("")
    const { skin } = useSkin()
    const {
        control,
        setError,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues })

    const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default

    const onSubmit = data => {
        const tempData = { ...data }
        delete tempData.terms
        if (Object.values(tempData).every(field => field.length > 0) && data.terms === true) {
            const { username, email, password } = data
            console.log(username, email, password)
            
            axios.post(`${baseURL}/user/create-user`, {email, userName : username, password})
            .then((response) => {
                console.log(response.data)
                if (response.data.success) history.push('/login')
                else setErrorMsg(response.data.message)
            })
            .catch((error) => console.log(error))
            
        } else {
            for (const key in data) {
                if (data[key].length === 0) {
                    setError(key, {
                        type: 'manual',
                        message: `Please enter a valid ${key}`
                    })
                }
                if (key === 'terms' && data.terms === false) {
                    setError('terms', {
                        type: 'manual'
                    })
                }
            }
        }
    }

    return (
        <div className='auth-wrapper auth-cover'>
            <Row className='auth-inner m-0'>
                <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
                    <h2 className='brand-text text-primary ms-1'>KO.nstellationData</h2>
                </Link>
                <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                        <img className='img-fluid' src={source} alt='Login Cover' />
                    </div>
                </Col>
                <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <CardTitle tag='h2' className='fw-bold mb-1'>
                            Adventure starts here 🚀
                        </CardTitle>
                        <CardText className='mb-2'>Make your app management easy and fun!</CardText>

                        <Form action='/' className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)} onChange={() => setErrorMsg("")}>
                            <div className='mb-1'>
                                <Label className='form-label' for='register-username'>
                                    Username
                                </Label>
                                <Controller
                                    id='username'
                                    name='username'
                                    control={control}
                                    render={({ field }) => (
                                        <Input autoFocus placeholder='johndoe' invalid={errors.username && true} {...field} />
                                    )}
                                />
                                {errors.username ? <FormFeedback>{errors.username.message}</FormFeedback> : null}
                            </div>
                            <div className='mb-1'>
                                <Label className='form-label' for='register-email'>
                                    Email
                                </Label>
                                <Controller
                                    id='email'
                                    name='email'
                                    control={control}
                                    render={({ field }) => (
                                        <Input type='email' placeholder='john@example.com' invalid={errors.email && true} {...field} />
                                    )}
                                />
                                {errors.email ? <FormFeedback>{errors.email.message}</FormFeedback> : null}
                            </div>
                            <div className='mb-1'>
                                <Label className='form-label' for='register-password'>
                                    Password
                                </Label>
                                <Controller
                                    id='password'
                                    name='password'
                                    control={control}
                                    render={({ field }) => (
                                        <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                                    )}
                                />
                            </div>
                            <div className='form-check mb-1'>
                                <Controller
                                    name='terms'
                                    control={control}
                                    render={({ field }) => (
                                        <Input {...field} id='terms' type='checkbox' checked={field.value} invalid={errors.terms && true} />
                                    )}
                                />
                                <Label className='form-check-label' for='terms'>
                                    I agree to
                                    <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                                        privacy policy & terms
                                    </a>
                                </Label>
                            </div>
                            <Button type='submit' block color='primary'>
                                Sign up
                            </Button>
                        </Form>
                        <p className='text-center mt-2'>
                            <span className='me-25' style={{color: "red"}}>{errorMsg}</span>
                        </p>
                        <p className='text-center mt-2'>
                            <span className='me-25'>Already have an account?</span>
                            <Link to='/login'>
                                <span>Sign in instead</span>
                            </Link>
                        </p>
                        <div className='divider my-2'>
                            <div className='divider-text'>or</div>
                        </div>
                        <div className='auth-footer-btn d-flex justify-content-center'>
                            <Button color='facebook'>
                                <Facebook size={14} />
                            </Button>
                            <Button color='twitter'>
                                <Twitter size={14} />
                            </Button>
                            <Button color='google'>
                                <Mail size={14} />
                            </Button>
                            <Button className='me-0' color='github'>
                                <GitHub size={14} />
                            </Button>
                        </div>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default Register
