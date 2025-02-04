import React, { useEffect, useState } from 'react';
import FetchData from '../utils/FetchData';
import Linstings from '../components/Linstings';
import Logout from '../components/Logout';
import { Slider } from '@mui/material';

function Home() {
  const { dogs, loading, error, currentPage, totalPages, updateFilters, goToPage } = FetchData();

  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [zipCodes, setZipCodes] = useState('');
  const [ageMin, setAgeMin] = useState('');
  const [ageMax, setAgeMax] = useState('');
  const [range, setRange] = useState([0, 15]);
  const [sort, setSort] = useState('');

  //fetch available breeds from API
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://frontend-take-home-service.fetch.com/dogs/breeds', {
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to fetch breeds');
        const data = await res.json();
        setBreeds(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBreeds();
  }, []);

  //apply filters when they change
  useEffect(() => {
    updateFilters({
      breeds: selectedBreeds,
      zipCodes,
      ageMin: ageMin || undefined,
      ageMax: ageMax || undefined,
      sort,
    });
  }, [selectedBreeds, zipCodes, ageMin, ageMax, sort]);

  //handle range slider
  function handleRangeSlider(e, range) {
    setRange(range);
    setAgeMin(range[0]);
    setAgeMax(range[1]);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4EFE7' }}>
      <div
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
          position: 'fixed',
          top: '0',
          zIndex: '9',
          backgroundColor: 'white',
          marginTop: '20px',
          borderRadius: '25px',
          boxShadow: '7px 7px #000000',
          flexWrap: 'wrap',
        }}
      >
        <label>Breed:</label>
        <select
          style={{
            border: '2px solid black',
            background: 'white',
            margin: '15px 20px 15px 20px',
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '25px',
          }}
          value={selectedBreeds}
          onChange={(e) => {
            setSelectedBreeds(e.target.value);
          }}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        {/* Zip Code Filter */}
        <label>Zip Codes:</label>
        <input
          type="text"
          placeholder="Enter zip code"
          style={{
            border: '2px solid black',
            background: 'white',
            margin: '15px 20px 15px 20px',
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '25px',
          }}
          onChange={(e) => setZipCodes(e.target.value)}
        />
        <label>Age Range:</label>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-10px' }}>
          <Slider sx={{ width: '200px', margin: '20px', color: 'black' }} value={range} onChange={handleRangeSlider} max={15} step={1} marks />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-20px', padding: '0px 14px' }}>
            <div>{range[0]}</div>
            <div>{range[1]}</div>
          </div>
        </div>

        <label>Sort By:</label>
        <select
          value={sort}
          style={{
            border: '2px solid black',
            background: 'white',
            margin: '15px 20px 15px 20px',
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '25px',
          }}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="breed:asc">Breed (A-Z)</option>
          <option value="breed:desc">Breed (Z-A)</option>
          <option value="name:asc">Name (A-Z)</option>
          <option value="name:desc">Name (Z-A)</option>
          <option value="age:asc">Age (Youngest First)</option>
          <option value="age:desc">Age (Oldest First)</option>
        </select>
      </div>

      {loading && <p>Loading dogs...</p>}
      {error && <p>Error: {error}</p>}

      {/* Dog List */}
      <Linstings dogs={dogs} />

      <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
        Next
      </button>

      <Logout />
    </div>
  );
}

export default Home;
