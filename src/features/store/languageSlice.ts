import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../translations/languageMaps/types';

interface LanguageState {
  currentLanguage: Language;
}

const initialState: LanguageState = {
  currentLanguage: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: { language: LanguageState }) => 
  state.language.currentLanguage;

export default languageSlice.reducer; 