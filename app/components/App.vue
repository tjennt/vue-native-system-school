<template lang="html">
    <RadSideDrawer ref="drawer" drawerLocation="Left" v-bind:gesturesEnabled="checkLogin" :drawerTransition="transition">
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
  import DrawerContent from "./DrawerMenuV2";
  import {mapState, mapActions} from 'vuex';

  export default {
    components: {
      DrawerContent
    },
    data() {
      return {
        transition: new SlideInOnTopTransition(),
        selectedPage: ''
      }
    },
    computed: {
      ...mapState('auth', ['checkLogin'])
    }
  }
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
