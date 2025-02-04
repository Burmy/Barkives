import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

const FetchData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dogs, setDogs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //extract queries
  const breeds = searchParams.getAll('breeds');
  const zipCodes = searchParams.getAll('zipCodes');
  const ageMin = searchParams.get('ageMin');
  const ageMax = searchParams.get('ageMax');
  const sortField = searchParams.get('sort') || 'breed:asc';
  const currentPage = searchParams.get('page') || 1;

  //fetch dogs based on filters
  useEffect(() => {
    const fetchDogIds = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          ...(breeds.length > 0 && { breeds }),
          ...(zipCodes.length > 0 && { zipCodes }),
          ...(ageMin && { ageMin }),
          ...(ageMax && { ageMax }),
          sort: sortField,
          size: 25,
          from: (currentPage - 1) * 25,
        });

        const res = await fetch(`${API_BASE_URL}/dogs/search?${queryParams.toString()}`, {
          credentials: 'include',
        });

        if (!res.ok) throw new Error('Failed to fetch dog IDs');
        const data = await res.json();
        setTotal(data.total);
        fetchDogDetails(data.resultIds);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchDogDetails = async (ids) => {
      if (!ids || ids.length === 0) {
        setDogs([]);
        return;
      }

      try {
        const res = await fetch(`${API_BASE_URL}/dogs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(ids),
        });
        if (!res.ok) throw new Error('Failed to fetch dog details');
        const data = await res.json();
        setDogs(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDogIds();
  }, [searchParams, currentPage]);

  const goToPage = (pageNumber) => {
    searchParams.set('page', pageNumber);
    setSearchParams(searchParams);
  };

  const handleSortChange = (newSort) => {
    searchParams.set('sort', newSort);
    setSearchParams(searchParams);
  };

  //change search filters and update URL params
  const updateFilters = (filters) => {
    const newParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => newParams.append(key, val));
      } else if (value) {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  };

  return {
    dogs,
    loading,
    error,
    currentPage: Number(currentPage),
    totalPages: Math.ceil(total / 25),
    sortField,
    goToPage,
    handleSortChange,
    updateFilters,
  };
};

export default FetchData;
