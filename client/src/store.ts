import { create } from 'zustand';

interface StoreType {
	darkMode: boolean;
	setDarkMode: (mode: boolean) => void;
}

export const useDevStore = create<StoreType>((set) => {
	//Retrieve dark mode value from local storage
	const savedDarkMode = localStorage.getItem('dark_mode_state');

	//Determine default value based on local storage or default to true
	const defaultDarkMode = savedDarkMode ? savedDarkMode === 'true' : true;

	return {
		darkMode: defaultDarkMode,
		setDarkMode: (mode: boolean) => {
			// Save dark mode to local storage
			localStorage.setItem('dark_mode_state', mode.toString());
			// Update dark mode state
			set(() => ({ darkMode: mode }));
		},
	};
});
