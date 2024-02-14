type TFontConfig = {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight?: string;
  textTransform?: 'uppercase';
};

export const fontConfig = (
  fontFamily: string,
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
  spacing = 1,
  uppercase = false,
) => {
  const config: TFontConfig = {
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight,
    letterSpacing: `${spacing}px`,
  };
  if (uppercase) {
    config.textTransform = 'uppercase';
  }
  if (lineHeight) {
    config.lineHeight = `${lineHeight}px`;
  }
  return config;
};
