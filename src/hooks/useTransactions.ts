"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

const ITEMS_PER_PAGE = 10;

const useTransactions = (
  allTransactions: TransactionType[],
  showActivityPage: boolean
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Estado del input del buscador
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [period, setPeriod] = useState<string>(""); 
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionType[]
  >([]);

  // Aplicar filtro por descripción si corresponde
  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    setSearchTerm(searchQuery);

    if (showActivityPage) {
      const filtered = allTransactions.filter((t) =>
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTransactions(filtered);
      setCurrentPage(1); // ✅ Reinicia la paginación cuando se aplica un nuevo filtro
    } else {
      setFilteredTransactions(allTransactions);
    }
  }, [searchParams, allTransactions, showActivityPage]);

  // Calcular páginas
  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers para búsqueda
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // ✅ Reinicia la paginación en búsquedas en tiempo real

    if (showActivityPage) {
      router.push(`/dashboard/activity?search=${value}`);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      redirectToActivityPage();
    }
  };

  const redirectToActivityPage = () => {
    if (searchTerm.trim().length > 0) {
      router.push(`/dashboard/activity?search=${searchTerm}`);
    }
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    searchTerm,
    setSearchTerm,
    handleSearchKeyDown,
    handleSearchChange,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
  };
};

export default useTransactions;
