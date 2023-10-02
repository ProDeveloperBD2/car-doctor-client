import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {
    const { createUserWithGoogle } = useContext(AuthContext)
    const handleGoogleUser = () => {
        createUserWithGoogle()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="flex flex-col w-full border-opacity-50 mt-2">
            <div className="divider">OR</div>
            <div className='mx-auto flex gap-6'>
                <button onClick={handleGoogleUser} className="btn btn-circle btn-outline bg-[orangered] text-white btn-sm text-xl">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline bg-[#2989ff] text-white btn-sm text-xl">
                    <FaFacebook></FaFacebook>
                </button>
                <button className="btn btn-circle btn-outline bg-[gray] text-white btn-sm text-xl">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;