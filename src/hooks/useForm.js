import { useState } from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = (e) => {
        console.log(values);
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const doSomething = () => {
        alert('something');
    }

    return [values, handleChanges, doSomething, renderAllInputs];
}