import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

type FormData = {
    name: string;
    email: string;
    number: number;
    message: string;
}

const Contact = () => {


    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email("enter valid Email").required("email is required"),
        number: yup.number().required("number is required"),
        message: yup.string().max(200, 'too many characters').required("message is required")
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function onCreatePost(data: FormData){
        console.log(data)

        reset()
    }

  return (
    <section className="contact-page">
    <div className="contact-con">
        <h1>contact us</h1>

        <p className="contact-message">
            Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at 702.698.7900. Looking forward to hearing from you.
        </p>

        <form id="message" onSubmit={handleSubmit(onCreatePost)}>
            <div className="name">
                <h4>Name - <span>Required</span></h4>
                <input type="text" id="" placeholder="Name" {...register("name")}/>
                <p className="error" style={{color: "red"}}>{errors.name?.message}</p>
            </div>
            <div className="name email">
                <h4>Email - <span>Required</span></h4>
                <input type="email" id="" placeholder="Email" {...register("email")}/>
                <p className="error" style={{color: "red"}}>{errors.email?.message}</p>
            </div>
            <div className="name number">
                <h4>Phone Number - <span>Required</span></h4>
                <input type="text"  id="" placeholder="Phone Number" {...register("number")}/>
                <p className="error" style={{color: "red"}}>{errors.number?.message && "number is required"}</p>
            </div>
            <div className="message">
                <h4>Your Message - <span>Required</span></h4>
                <textarea id="" placeholder="Your Message" {...register("message")}/>
                <p className="error" style={{color: "red"}}>{errors.message?.message}</p>
            </div>

            <button>Send</button>
        </form>
    </div>
    </section>
  )
}

<p className="error"></p>
export default Contact
