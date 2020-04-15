import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    })

    return [darkMode, setDarkMode];
}