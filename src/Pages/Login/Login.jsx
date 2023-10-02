import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shered/SocialLogin/SocialLogin';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLoginSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
        Email: ${email}
        Password: ${password}
        `)
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                form.reset()
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero mt-10 mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-gray-700">Login</h1>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered bg-white" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered bg-white" name='password' required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="LOGIN" className="bg-[orangered] text-xl font-semibold py-2 rounded text-white cursor-pointer" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-center mt-5'>New to Car Doctors? <Link to="/register" className='text-[orangered] font-semibold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;