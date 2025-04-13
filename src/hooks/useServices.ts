import { ServiceType } from "@/types/service.types";
import { useState, ChangeEvent, useEffect } from "react";

const useServices = (allServices: ServiceType[], showServicesPage: boolean) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredServices, setFilteredServices] = useState<ServiceType[]>(allServices);
  console.log(allServices);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value.toLowerCase());
  };


  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setFilteredServices(
        allServices.filter((service: any) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredServices(allServices)
    }
  }, [searchTerm, allServices]);

  return {
    filteredServices,
    searchTerm,
    handleSearchChange,
  };
};

export default useServices;
