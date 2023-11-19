import { useState } from "react";
import FormAction from "./FormAction";
import { signupFields } from "../../constants/formFields";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { Store } from 'react-notifications-component';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => { fetch("http://localhost:5000/api/user/signup",{
    method: "POST",
    headers:{
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupState),
  }).then((res)=>{
    res.json();
    if(res.status===200){
      Store.addNotification({
        title: "🙌 You are all signed up!",
        message: "We will redirect you shortly",
        type: "success",
        insert: "top",
        container: "top-right",
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
      setTimeout(()=>{navigate("/")},2000);
     
      console.log("Created successfully!");
    }
  }).catch((err)=>console.log(err));};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
