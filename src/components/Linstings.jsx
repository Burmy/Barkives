import { Card, Container } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Linstings({ dogs, toggleFavorite, favorites }) {
  return (
    <Container
      maxWidth=""
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#F4EFE7',
      }}
    >
      {dogs.map((dog) => (
        <Card
          sx={{
            width: '350px',
            height: '400px',
            margin: '20px',
            borderRadius: '25px',
            border: 'black solid 2px',
            boxShadow: '7px 7px #000000',
          }}
        >
          <Card
            key={dog.id}
            sx={{
              boxSizing: 'border-box',
              border: 'white solid 5px',
              width: '350px',
              height: '400px',
              borderRadius: '25px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img src={dog.img} alt={dog.name} style={{ objectFit: 'cover', width: '350px', height: '320px', borderRadius: '3px' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: '700', fontSize: '26px' }}>{dog.name}</div>
              {dog.breed}, Age: {dog.age}, Zip: {dog.zip_code}
            </div>
            <div style={{ position: 'absolute', top: '20px', right: '20px', color: '#E66D5E' }} onClick={() => toggleFavorite(dog.id)}>
              {favorites.has(dog.id) ? (
                <FavoriteIcon
                  sx={[
                    { transform: 'scale(2)', color: '#ffd230', stroke: 'white', strokeWidth: 2 },
                    {
                      '&:hover': {
                        color: '#ffe174',
                        cursor: 'pointer',
                      },
                    },
                  ]}
                />
              ) : (
                <FavoriteIcon
                  sx={[
                    { transform: 'scale(1.6)', stroke: 'white', strokeWidth: 2 },
                    {
                      '&:hover': {
                        color: '#e14e3b',
                        cursor: 'pointer',
                      },
                    },
                  ]}
                />
              )}
            </div>
          </Card>
        </Card>
      ))}
    </Container>
  );
}

export default Linstings;
