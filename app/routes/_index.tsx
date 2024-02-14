import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();

  const currentLocale = i18n.language;

  const changeLanguageHandler = () => {
    const newLocale = currentLocale === 'pl' ? 'en' : 'pl';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    i18n.changeLanguage(newLocale);
  };

  return (
    <Box>
      <Typography variant="h3">{t('test')}</Typography>
      <Button onClick={changeLanguageHandler}>
        <Typography>{currentLocale === 'pl' ? 'English' : 'Polski'}</Typography>
      </Button>
    </Box>
  );
};

export default Index;
