import OTPLogin from "~/components/auth/otp/login";
import OTPSignUp from "~/components/auth/otp/signup";


export function UserAuthForm( ) {
 
  return (
    <div className='flex flex-col justify-center'>
      <OTPLogin />
      <OTPSignUp />
    </div>
  )
}
