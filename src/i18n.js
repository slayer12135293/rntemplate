import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationSv from './locales/sv.json'

i18n
    .use(initReactI18next)
    .init({
        resources:{
            sv: { translation:translationSv },
        },
        interpolation: {
            escapeValue: false, 
        },
        debug: true,
        initImmediate: false,
        fallbackLng: 'sv',
        lng: 'sv',
      
    }, (error) => {
        if (error) {
            return console.log('something went wrong loading', error)
        }
        return null
    })

export default i18n
