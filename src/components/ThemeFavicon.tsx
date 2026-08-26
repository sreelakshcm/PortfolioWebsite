import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@features/themeSlice';
import { RootState } from '@app/store';

const ThemeFavicon: FC = () => {
  const theme = useSelector((state: RootState) => selectTheme(state));

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('#favicon');

    if (favicon) {
      favicon.href = theme === 'dark' ? '/favicon-dark.png' : '/favicon-light.png';
    }
  }, [theme]);

  return null;
};

export default ThemeFavicon;
