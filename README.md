# 🌟 Injective Protocol

_Fast, Secure, and Fully Decentralized Trading._

---

## 📚 Getting Started

1. Clone the repository

```bash
$ git clone git@github.com:InjectiveLabs/website.git injective-website
$ cd injective-website
$ yarn
```

2. Compile the app

```bash
$ yarn run dev
```

## 📖 Documentation

### Adding new Locale

1. Duplicate the `locales/en.js` file and translate the strings in the desired locale,
2. In `locales/index.js` add the new locale as a constant `export const newLocale = 'new'`, add that locale to the `locales` array, export the locale's strings `export { default as new } from './new'`, and finally add it to the `clientLocales` array.
3. In `plugins/i18n.js` import the new locale messages and add them to the `messages` key for the `VueI18n` class instance config object.

---

## ⛑ Support

Reach out to us at one of the following places!

- Website at <a href="https://injectiveprotocol.com" target="_blank">`injectiveprotocol.com`</a>
- Twitter at <a href="https://twitter.com/InjectiveLabs" target="_blank">`@InjectiveLabs`</a>

---

## 🔓 License
