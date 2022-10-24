<template>
  <div ref="bellIcon">Notifications</div>
</template>

<script type="module">
import { render } from "@engagespot/client";

export default {
  name: "Notifications",
  mounted: function () {
    const options = {
      apiKey: "od9t6x45udt1m3g0nznag",
      userId: "hemanditwiz@gmail.com",
    };
    render(this.$refs.bellIcon, options);
  },
};
</script>