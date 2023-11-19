const loginFields=[
    {
        labelText:"email",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"email"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
  
    {
        labelText:"Fullname",
        labelFor:"fullname",
        id:"fullname",
        name:"fullname",
        type:"text",
        autoComplete:"fullname",
        isRequired:true,
        placeholder:"Fullname"   
    },
    {
        labelText:"City",
        labelFor:"city",
        id:"city",
        name:"city",
        type:"text",
        autoComplete:"city",
        isRequired:true,
        placeholder:"City"   
    },
    {
        labelText:"Email",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"password",
        isRequired:true,
        placeholder:"Password"   
    }
]

export {loginFields,signupFields}