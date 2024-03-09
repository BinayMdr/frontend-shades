import { useAppSelector } from '../store/index';

export const useSettings = () => {
  return useAppSelector((state) => state.setting.settingState);
};

export const findSettingByKey = (keyToFind: string) => {
  const settings = useSettings();
  if (settings !== undefined && Object.keys(settings).length !== 0) {
    const entry = Object.entries(settings).find(([_, value]) => value.key === keyToFind);
    return entry ? entry[1] : null;
  }
  return null;
};
