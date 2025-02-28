"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

// Custom Hook para filtros y paginación.


const ITEMS_PER_PAGE = 10;

const useTransactions1 = (allTransactions: TransactionType[] ) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Estados locales
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionType[]>([]);



  // Filtrar transacciones por búsqueda
  useEffect(() => {
    const filtered = allTransactions.filter((t) =>
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, allTransactions]);

     // Calcular total de páginas
     const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
     const paginatedTransactions = filteredTransactions.slice(
       (currentPage - 1) * ITEMS_PER_PAGE,
       currentPage * ITEMS_PER_PAGE
     );
 

  // Manejar búsqueda con "Enter"
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      redirectToActivityPage();
    }
  };
  const redirectToActivityPage = () => {
    if (searchTerm.trim().length > 0) {
      router.push(`/dashboard/activity?search=${searchTerm}`);
    }
  };

   // Cambiar página
   const changePage = (page: number) => {
    setCurrentPage(page);
  };




  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
  };
};

export default useTransactions1;

