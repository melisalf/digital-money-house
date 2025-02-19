"use client";
import InputText from "@/components/form/InputText";
import { RegisterScheme } from "@/schemes/register.scheme";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormType } from "@/types/user.types";
import { useState } from "react";
import { useRouter } from "../../../../node_modules/next/navigation";
import SubmitButton from "@/components/form/SubmitButton";
import Cookies from "js-cookie";
import { newUser } from "@/services/users/newUser";


const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState(null);

  const RegisterFormMethods = useForm({
    resolver: yupResolver(RegisterScheme),
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = RegisterFormMethods;

  const onSubmit = async (data: RegisterFormType) => {
    try {
      const response = await newUser({ ...data, dni: Number(data.dni) });
          //resetiamos el formulario.
      reset();
      if (response) {
         //setiamos una cookie de registro.
         Cookies.set("isRegisterSuccess", "true", {expires: new Date(Date.now() + 1000 * 60 * 2),});
         router.push("/register/success");
      }
    } catch (error) {
      console.error("Error en el registro:", error);
     
    }
  };
  
  return (
      <FormProvider {...RegisterFormMethods}>
        <form className="w-full flex flex-col"
        onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-8">
            {/* Nombre */}
            <div className="">
            <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="text"
              fieldName="firstname"
              errorText={errors.firstname?.message}
              placeholder="Nombre*"
            />
            </div>
         

            {/* Apellido */}
            <div>
                   <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="text"
              fieldName="lastname"
              errorText={errors.lastname?.message}
              placeholder="Apellido*"
            /></div>
       

            {/* DNI */}
            <div>
            <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="text"
              fieldName="dni"
              errorText={errors.dni?.message}
              placeholder="DNI*"
            />
            </div>
         

            {/* Email */}
            <div>
            <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="text"
              fieldName="email"
              errorText={errors.email?.message}
              placeholder="Correo electronico*"
            />
            </div>
           
          </div>

          {/* Formato contraseña */}
          <div className=" text-start mb-3 mt-5">
            <p className="text-xs text-gray1 md:text-[13.9px]">
              Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
              carácter especial, una mayúscula y un número.
            </p>
          </div>

          <div className=" grid md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-8">
            {/* Contraseña */}
            <div>
            <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="password"
              fieldName="password"
              errorText={errors.password?.message}
              placeholder="Contraseña*"
            />

            </div>
       
            {/* Confirmar contraseña */}
            <div>
            <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="password"
              fieldName="confirmPassword"
              errorText={errors.confirmPassword?.message}
              placeholder="Confirmar contraseña*"
            />
            </div>
         
            {/* Telefono */}
            <div>
            <InputText
              inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
              type="text"
              fieldName="phone"
              errorText={errors.phone?.message}
              placeholder="Teléfono*"
            />
            </div>
       

            {/* Boton crear cuenta */}
            <div>
            <SubmitButton
              className="w-full mt-2 md:mt-0 bg-green focus:outline-2 focus:outline-black"
              text={"Crear cuenta"}
            />
            </div>  
          </div>
        </form>
      </FormProvider>
  );
};

export default RegisterForm;
