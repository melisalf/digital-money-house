"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordScheme } from "@/schemes/loginScheme";
import InputText from "@/components/form/InputText";
import SubmitButton from "@/components/form/SubmitButton";
import { useState } from "react";
import { useRouter } from "../../../../node_modules/next/navigation";
import { useEmail } from "@/context/emailContext";
import { PasswordType } from "@/types/auth.types";
import { login } from "@/services/auth.service";
import Link from "../../../../node_modules/next/link";
import Cookies from "js-cookie";
import { useToken } from "@/context/tokenContext";
import { toast, Toaster } from "sonner";

export const FormPassword = () => {
  const { email } = useEmail();
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const loadingMessage = () => {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ message: "Bienvenido!!" }), 2000)
      );

    toast.promise(promise, {
      loading: "Loading...",
      success: (data: any) => {
        return `${data.message} Aguarda un momento.`;
      },
      error: "Error",
    });
  };

  const methods = useForm({
    resolver: yupResolver(PasswordScheme),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: PasswordType) => {
    setServerError(null);
    const body = { email: email, password: data.password };
    try {
      const loginResponse = await login(body);

      if (loginResponse?.error) {
        setServerError("Credenciales incorrectas. Intente nuevamente");
        return;
      }

      //si existe el token en la respuesta y no hay error:
      if (loginResponse?.token && !loginResponse.error) {
        //guardamos el token en un cookie que expira en 1 hora.
        Cookies.set("authToken", loginResponse.token, { expires: 1 / 24 });
        //guardamos el token en el localStorage.
        localStorage.setItem("authToken", loginResponse.token);
        //guardamos el token en un estado global.
        // setToken(loginResponse.token);
        //nos redirigimos al home.
        console.log("Login exitoso");
        //se podria poner un modal con un mensaje de exito y que luego nos redirija
        //loadingMessage();
        router.push("/dashboard");
      }
    } catch (error) {
      setServerError("Ha ocurrido un error. Intenta iniciar nuevamente.");
    }
  };

  return (
    <>
      {/* <Toaster
        position="bottom-center"
        richColors
        offset="20vh" 
        mobileOffset={{ bottom: '200px' }}
        toastOptions={{
          style: {
            background: '#0AEB8C',
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px",
          },
        }}
      /> */}
      <FormProvider {...methods}>
        <form
          className="w-full flex flex-col gap-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputText
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
            placeholder="Correo electrónico"
            fieldName="email"
            type="email"
            defaultValue={email}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <InputText
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
            type="password"
            placeholder="Contraseña"
            fieldName="password"
            errorText={errors?.password?.message || ""}
          />

          <SubmitButton
            className="w-full  bg-green focus:outline-2 focus:outline-black"
            text={"Continuar"}
          />
          {serverError && (
            <Link href={"/login"}>
              <p className="w-full max-w-[300px] font-semibold md:max-w-[360px] flex flex-col text-sm italic text-error1 pt-2 pl-3 m:pl-5 text-center">
                {serverError}
              </p>
            </Link>
          )}
        </form>
      </FormProvider>
    </>
  );
};
