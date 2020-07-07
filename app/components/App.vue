<template lang="html">
    <RadSideDrawer ref="drawer" drawerLocation="Left" v-bind:gesturesEnabled="gesturesEnabled" :drawerTransition="transition">
        <StackLayout ~drawerContent backgroundColor="#ffffff">
            <slot name="drawerContent"/>
        </StackLayout>
        <Frame ~mainContent ref="drawerMainContent">
            <slot name="mainContent"/>
        </Frame>
    </RadSideDrawer>
</template>

<script>
  import {SlideInOnTopTransition} from 'nativescript-ui-sidedrawer';
  import SelectedPageService from "~/shared/selected-page-service";

  export default {
    data() {
      return {
        transition: new SlideInOnTopTransition(),
        gesturesEnabled: true,
        selectedPage: ''
      }
    }
  }
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
