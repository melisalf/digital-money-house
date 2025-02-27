"use client";

import EditUserIcon from "@/components/common/Icons/EditUserIcon";
import { UserDataType } from "@/types/user.types";


type ProfileDataProps = {
  userData: UserDataType;
  token: string;
};

const ProfileData = ({ userData, token }: ProfileDataProps) => {
  console.log(userData);
  const formatUserData = [
    { label: "Email", fieldName: userData.email, type: "text", edit: false },
    {
      label: "Nombre y apellido",
      fieldName: `${userData.firstname} ${userData.lastname}`,
      type: "text",
      edit: false,
    },
    { label: "CUIT", fieldName: userData.dni, type: "text", edit: false },
    {
      label: "Teléfono",
      fieldName: userData.phone,
      type: "text",
      edit: false,
    },
    {
      label: "Contraseña",
      fieldName: userData.password,
      type: "text",
      edit: false,
    },
  ];

  const activeEdit = (field: any) => {
    field.edit(true);
   
  };

  return (
    <section className="w-full justify-start items-start p-5 md:p-8 xl:px-10 flex flex-col  rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <h2 className="w-full text-xl font-bold text-dark1  pb-4 border-b border-gray1 md:border-dark1/0 xl:pb-2  ">
        Tus datos
      </h2>

      {formatUserData &&
        formatUserData.map((field) => (
          <div
            className="w-full flex flex-col md:flex-row justify-between items-start md:gap-5 md:items-center py-2 border-b border-gray1 md:border-dark1/50"
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
  );
};

export default ProfileData;
