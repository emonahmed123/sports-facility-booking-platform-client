import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Singup = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
       
     console.log(data)  
    
    }
    
    
    return (
    <section className='py-[50px]'>
            <p className='pt-5 pl-5 font-Poppis'> <small >If you want? <Link className='text-primary' to="/">Back Home</Link>  </small> </p>
        <div className='flex min-h-min	 justify-center items-center font-Poppis' >
           
        <div className="card w-96 bg-base-100 shadow-xl">
        
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-bold">Name<sup >*</sup></span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: " Name is Required"
                                },

                            })}
                            type="name" placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"

                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-bold">Email <sup >*</sup></span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: " Email is Required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email '
                                }
                            })}
                            type="email" placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"

                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text text-bold">Password <sup >*</sup></span>
                        </label>
                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: " Password   is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                            type="password" placeholder="You password"
                            className="input input-bordered w-full max-w-xs"

                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>



                    </div>
                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text text-bold">Phone <sup >*</sup></span>
                        </label>
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "phone Number is Required"
                                },
                              
                                minLength: {
                                    
                                    value: 11,
                                    message: 'Must be 6 characters or longer'
                                },
                              
                             
                                
                            })}
                            type="phone" placeholder="You phone Number"
                            className="input input-bordered w-full max-w-xs"

                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                            {errors.number?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                           

                        </label>



                    </div>
                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text text-bold"> Address <sup >*</sup></span>
                        </label>
                        <input
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: " Address is Required"
                                },
                              
                             
                               
                            })}
                            type="phone" placeholder="You phone Number"
                            className="input input-bordered w-full max-w-xs"

                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?. address.message}</span>}
                            
                           

                        </label>



                    </div>


                    <input className=' btn w-full max-w-xs bg-[#3d85ff] text-[#ffff]' type="submit" value='SIGN UP' />
                </form>
                <p> <small>Already have an account ? <Link className='text-primary' to="/login">Please Login</Link>  </small> </p>
                {/* {SingerrorMessage} */}

               
        </div>

    </div>
    </div>
    </section>
    );
};

export default Singup;