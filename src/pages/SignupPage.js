import Header from "../components/LoginSignup/Header";
import Signup from "../components/LoginSignup/Signup";

export default function SignupPage() { 


  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{backgroundImage: "url('/bl-bg.jpg')"}}>
    <div className="bg-white rounded-3xl box max-w-md w-full space-y-8">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </div>
    </div>
  );
}
