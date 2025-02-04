import React, { useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />)(`
  color: white;
  font-size: 24px;
  font-family:'DM Sans';
`);

function Logout() {
  const auth = useAuth();
  return (
    <CustomTooltip title="Logout" arrow>
      <LogoutIcon
        sx={[
          { transform: 'scale(2)', color: 'black' },
          {
            '&:hover': {
              color: '#878787',
              cursor: 'pointer',
            },
          },
        ]}
        onClick={() => auth.logOut()}
        className="btn-submit"
      >
        logout
      </LogoutIcon>
    </CustomTooltip>
  );
}

export default Logout;
