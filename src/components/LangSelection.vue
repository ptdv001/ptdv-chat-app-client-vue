<template>
  <div>
    <form @submit="updateLocale">
      <label>Language</label>
      <select @change="updateLocale" :value="locale">
        <option value="en-us">English</option>
        <option value="es-es">Spanish</option>
        <option value="fr-fr">French</option>
        <option value="ja-jp">Japanese</option>
      </select>
    </form>
  </div>
</template>
<script>
import { i18n, setLocale } from "../i18n";

export default {
  name: "lang-selection",
  computed: {
    locale() {
      return i18n.locale;
    },
    dateTimeForm() {
      return i18n.getDateTimeFormat(i18n.locale);
    }
  },
  methods: {
    updateLocale(event) {
      const newLocale = event.target.value;
      setLocale(newLocale, i18n);
    }
  }
};
</script>
<style lang="scss" scoped></style>
