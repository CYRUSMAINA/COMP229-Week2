import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ()=>{

    const [form,setForm] = useState({
        username:'',
        password:'',
        email:''

    });
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        const{name,value}=e.target;
        setForm({...form,[name]:value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch('/app/auth/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(form)
            })
            if(!response.ok){
                throw new Error ('failed to register');
            }
            const data= await response.json();
            localStorage.setItem('token',data.token);
            localStorage.setItem('username',data.user.username)

            navigate('/')
        }catch (error){
            setError(error.message)
        }
    }

}
export default Register