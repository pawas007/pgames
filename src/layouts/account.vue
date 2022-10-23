<template>
  <div class="account_layout">
    <AccountHeader/>
    <router-view />
  </div>
</template>

<script>
import AccountHeader from "@/components/Header/AccountHeader";

export default {
  name: "account",
  components: {AccountHeader}
}
</script>
