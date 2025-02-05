import React, { useEffect, useState } from 'react';
import FetchData from '../utils/FetchData';
import Listings from '../components/Listings';
import MatchModal from '../components/MatchModal';
import { Box, Slider } from '@mui/material';
import Header from '../components/Header';
import Logout from '../components/Logout';
import { styled } from '@mui/system';
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';

const FilterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'sticky',
  top: '-1px',
  zIndex: '9',
  backdropFilter: 'blur(100px)',
  width: '100%',
  padding: '25px 0px 30px 0px',
});

const FilterBtn = styled('div')({
  width: '100px',
  height: '76px',
  border: '2px solid black',
  backgroundColor: 'white',
  borderRadius: '25px',
  boxShadow: '7px 7px #000000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px 15px',
});

const FilterRow = styled('div')({
  padding: '0px 30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid black',
  backgroundColor: 'white',
  borderRadius: '25px',
  boxShadow: '7px 7px #000000',
  flexWrap: 'wrap',
  fontFamily: 'Fredoka',
});

const FilterOption = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '10px 0px',
});

const styles = {
  inputStyle: {
    border: '2px solid black',
    background: 'white',
    margin: '0px 20px 15px 20px',
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '25px',
    fontFamily: 'Fredoka',
  },
  labelStyle: {
    fontSize: '20px',
  },
};

function Home() {
  const { dogs, loading, error, favorites, currentPage, totalPages, toggleFavorite, updateFilters, fetchMatch, goToPage } = FetchData();

  const [searchParams, setSearchParams] = useSearchParams();
  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState(searchParams.getAll('breeds') || []);
  const [zipCodes, setZipCodes] = useState(searchParams.get('zipCodes') || "");
  const [ageMin, setAgeMin] = useState('');
  const [ageMax, setAgeMax] = useState('');
  const [range, setRange] = useState([0, 15]);
  const [sort, setSort] = useState(searchParams.get('sort') || '');

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
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Header />

      {/* Filters */}
      <FilterContainer>
        <FilterBtn>
          <MatchModal dogs={dogs} favorites={favorites} fetchMatch={fetchMatch} />
        </FilterBtn>

        <FilterRow>
          <FilterOption>
            <label style={styles.labelStyle}>Breed</label>
            <select
              style={styles.inputStyle}
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
          </FilterOption>

          {/* Zip Code Filter */}
          <FilterOption>
            <label style={styles.labelStyle}>Zip Codes</label>
            <input type="text" placeholder="Enter zip code" style={styles.inputStyle} onChange={(e) => setZipCodes(e.target.value)} />
          </FilterOption>

          {/* Age Range */}
          <FilterOption>
            <label style={styles.labelStyle}>Age Range</label>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-10px' }}>
              <Slider sx={{ width: '200px', margin: '20px', color: 'black' }} value={range} onChange={handleRangeSlider} max={15} step={1} marks />
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-20px', padding: '0px 14px' }}>
                <div>{range[0]}</div>
                <div>{range[1]}</div>
              </div>
            </div>
          </FilterOption>

          <FilterOption>
            {/* Zip Code Filter */}
            <label style={styles.labelStyle}>Sort By</label>
            <select value={sort} style={styles.inputStyle} onChange={(e) => setSort(e.target.value)}>
              <option value="breed:asc">Breed (A-Z)</option>
              <option value="breed:desc">Breed (Z-A)</option>
              <option value="name:asc">Name (A-Z)</option>
              <option value="name:desc">Name (Z-A)</option>
              <option value="age:asc">Age (Youngest First)</option>
              <option value="age:desc">Age (Oldest First)</option>
            </select>
          </FilterOption>
        </FilterRow>

        <FilterBtn>
          <Logout />
        </FilterBtn>
      </FilterContainer>

      {loading && <p>Loading dogs...</p>}
      {error && <p>Error: {error}</p>}

      {/* Dog List */}
      <Listings dogs={dogs} toggleFavorite={toggleFavorite} favorites={favorites} />

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </Box>
  );
}

export default Home;
