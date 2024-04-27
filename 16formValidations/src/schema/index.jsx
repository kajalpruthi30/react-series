import * as yup from "yup";

export const registrationSchema = yup.object({
    name: yup.string().min(2).max(20).required("Please enter your name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    password: yup.string().min(8).max(20).required("Please enter your password"),
    confirm_password: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match")
})