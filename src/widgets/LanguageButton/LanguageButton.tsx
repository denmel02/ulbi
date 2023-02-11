import { useTranslation } from "react-i18next";
import { Button } from "shared";

interface LanguageButtonProps {
  className?: string;
}

export const LanguageButton = (props: LanguageButtonProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const onClick = async () => {
    const newLng = i18n.language === 'en' ? 'ru' : 'en';

    i18n.changeLanguage(newLng);
  };

  return (
    <Button className={ className } onClick={ onClick }>{ t('Lng') }</Button>
  );
}