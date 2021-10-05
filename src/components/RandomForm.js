import { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialValues = { firstName: '', lastName: '', email: '' };

const RandomForm = (props) => {
    const [values, handleChanges, third] = useForm(initialValues);
    return (
        <form>
            <input name="firstName" onChange={handleChanges} value={values.firstName} />
            <input name="lastName" onChange={handleChanges} value={values.lastName} />
            <input name="email" onChange={handleChanges} value={values.email} />
        </form>
    )
}

export default RandomForm;