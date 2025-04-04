import { UserDataType, UserEditDataType } from '@/types/user.types';
import React from 'react'
import { useForm } from 'react-hook-form';

type ProfileDataProps = {
    userData: UserDataType;
    token: string;
  };
  
type ProfileFormData = {
    email: string;
    fullname: string;
    dni: string;
    phone: string;
    password: string;
}

const Profile = ( {userData, token} : ProfileDataProps  ) => {

    const {
		control,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<ProfileFormData>({
        defaultValues: {
            email: userData.email,
            fullname: `${userData.firstname} ${userData.lastname}`,
            dni: userData.dni,
            phone: userData.phone,
            password: "********"
        },
		mode: "onBlur",
	});

  return (
    <section className="w-full justify-start items-start px-5 pt-5 pb-8 md:p-8 xl:pt-6 xl:pb-8 xl:px-10 flex flex-col  rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
    <h2 className="w-full text-xl font-bold text-dark1  pb-4 border-b border-dark1/30 md:border-dark1/0 xl:pb-2  ">
      Tus datos
    </h2>

    {formatUserData &&
      formatUserData.map((field) => (
        <div
          className="w-full flex flex-col md:flex-row justify-between items-start md:gap-5 md:items-center py-1 border-b border-dark1/30 md:border-dark1/50"
          key={field.label}
        >
          {/* label */}
          <div className="w-full flex md:flex-row md:w-2/6 xl:w-1/5">
            <h3 className=" font-medium text-[16px] text-dark1">
              {field.label}
            </h3>
          </div>

          {/* Input editable */}
          <div className="w-full flex flex-row justify-between items-center md:w-4/6 xl:w-4/5">
            {/* Input */}
            {field.label === "Contraseña" ? (
              <div className="w-5/6 md:w-3/6">
                 <span className="text-black/50 md:w-3/6 text-base">
                ********
              </span>
              </div>
            ) : (
              <div className="w-5/6 md:w-3/6">
                   <span className="text-black/50 text-base md:w-3/6">
                {field.fieldName}
              </span>
              </div>
            )}

          {/* Icon */}
            {field.label !== "Email" && (
              <div className="w-6 h-6  items-center">
                <EditUserIcon
                  onClick={() => activeEdit(field)}
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
          
        </div>
      ))}
  </section>
  )
}

export default Profile