import { useState } from 'react'

export const useForm = (initialState={}) => {
  
   const [values,setValues]= useState(initialState);


   const handleReset=()=>{
       setValues(initialState);
   }

    const handleInputChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
    }


    return [values,handleInputChange,handleReset];

}
