import { Stack, Typography } from '@mui/material';
import { theme } from '../../theme/theme';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={5}
      bgcolor={theme.palette.componentBackground.main}
      borderBottom={`1px solid ${theme.palette.borderColor.main}`}
      height={theme.components?.header?.height}
      padding="0 25px"
    >
      <Logo height={25} />
      <Typography
        color={theme.palette.primary.main}
        fontFamily={theme.typography.fontFamily}
        fontWeight={600}
      >
        exoplanet catalogue
      </Typography>
    </Stack>
  );
};

export default Header;
