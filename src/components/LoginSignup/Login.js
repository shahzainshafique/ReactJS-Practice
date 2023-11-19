import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormAction from "./FormAction";
import { loginFields } from "../../constants/formFields";
import FormExtra from "./FormExtra";
import Input from "../Input";
import { setUserName } from "../../store/actions/setUserName";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
const [loginState, setLoginState] = useState(fieldsState);
const dispatch= useDispatch();
const userName = useSelector((state) => state.user.userName);
const navigate= useNavigate();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    fetch("http://localhost:5000/api/user/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginState),
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(setUserName(data.fullname));
      navigate("/");
    }).catch((e)=>console.log(e));};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
