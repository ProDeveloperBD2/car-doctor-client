import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import SocialLogin from '../Shered/SocialLogin/SocialLogin';

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const handleSignUpSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
        Name: ${name}
        Email: ${email}
        Password: ${password}
        `)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                form.reset();
                userProfileUpdate(result.user, name)
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => console.log(error))
        const userProfileUpdate = (user, name) => {
            profileUpdate(user, {
                displayName: name
            })
                .then(() => {
                    console.log('user update success')
                })
                .catch(error => console.log(error))
        }
    }
    return (
        <div className="hero mt-10 mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-gray-700">Sign Up</h1>
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered bg-white" name='name' required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="SIGN UP" className="bg-[orangered] text-xl font-semibold py-2 rounded text-white cursor-pointer" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-center mt-5'>Already Have an Account? <Link to="/login" className='text-[orangered] font-semibold'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;