"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

// Custom Hook para filtros y paginación.

const ITEMS_PER_PAGE = 10;

const useTransactions = (
  allTransactions: TransactionType[],
  showActivityPage: boolean
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Estados locales
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionType[]
  >([]);

  // Filtrar transacciones por búsqueda
  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    setSearchTerm(searchQuery);
    if (showActivityPage) {
      const filtered = allTransactions.filter((t) =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(allTransactions);
    }
  }, [searchTerm, allTransactions, showActivityPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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

  // Cambiar página
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
