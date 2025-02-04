import { Card, Fade, Modal, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import PetsIcon from '@mui/icons-material/Pets';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />)(`
    color: white;
    font-size: 24px;
    font-family:'DM Sans';
`);

function MatchModal({ dogs, favorites, fetchMatch }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [match, setMatch] = useState(null);

  //handle match generation
  const handleMatch = async () => {
    if (favorites.size === 0) {
      alert('Please add some favorite dogs first!');
      return;
    }
    try {
      const matchId = await fetchMatch([...favorites]);
      const matchedDog = dogs.find((dog) => dog.id === matchId);
      setMatch(matchedDog);
      handleOpen();
    } catch (err) {
      console.error('Failed to find a match:', err);
    }
  };

  return (
    <div>
      <CustomTooltip title="Match with a Dog!" arrow>
        <PetsIcon
          sx={[
            { transform: 'scale(2)', padding: '10px' },
            {
              '&:hover': {
                color: '#E66D5E',
                cursor: 'pointer',
                transform: 'scale(2.2)',
              },
            },
          ]}
          onClick={handleMatch}
        />
      </CustomTooltip>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {match && (
            <Card
              sx={{
                width: '450px',
                height: '550px',
                margin: '20px',
                borderRadius: '25px',
                border: 'black solid 2px',
                boxShadow: '7px 7px #000000',
                position: 'absolute',
                top: '20%',
                left: '37%',
              }}
            >
              <Card
                sx={{
                  boxSizing: 'border-box',
                  border: 'white solid 5px',
                  width: '450px',
                  height: '550px',
                  borderRadius: '25px',
                  boxShadow: '7px 7px #000000',
                  position: 'absolute',
                }}
              >
                <img src={match.img} alt={match.name} style={{ objectFit: 'cover', width: '450px', height: '435px', borderRadius: '3px' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', fontSize: '26px' }}>{match.name}</div>
                  {match.breed}, Age: {match.age}, Zip: {match.zip_code}
                  <div style={{ fontSize: '24px', marginTop: '16px' }}>Contact Today!</div>
                </div>
              </Card>
            </Card>
          )}
        </Fade>
      </Modal>
    </div>
  );
}

export default MatchModal;
