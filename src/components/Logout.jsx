import React, { useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />)(`
  color: white;
  font-size: 24px;
  font-family:"Fredoka";
`);

function Logout() {
  const auth = useAuth();
  return (
    <CustomTooltip title="Log Out" arrow>
      <LogoutIcon
        sx={[
          { transform: 'scale(1.8)', color: 'black', padding: '10px', marginRight: '-5px' },
          {
            '&:hover': {
              color: '#E66D5E',
              cursor: 'pointer',
              transform: 'scale(2)',
            },
          },
        ]}
        onClick={() => auth.logOut()}
        className="btn-submit"
      />
    </CustomTooltip>
  );
}

export default Logout;
