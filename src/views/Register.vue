<template lang="pug">
v-container
  v-layout( justify-center ).mt-4
    RegistrationCard
</template>

<script>
import RegistrationCard from "@/components/common/cards/RegistrationCard";
export default {
  name: "Register",
  components: { RegistrationCard }
};
</script>

<style scoped></style>
