<template>
    <Page class="page">
        <ActionBar class="action-bar">
            
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>

            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" text="Browse"/>
        </ActionBar>
        <GridLayout rows="10*, *" class="page__content">
            <StackLayout row="0">
              <Label class="page__content-icon far" text.decode="&#xf1ea;"/>
              <Label class="page__content-placeholder" :text="message"/>
            </StackLayout>
            <StackLayout row="1">
              <MenuBottom />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";
  import MenuBottom from "./MenuBottom";

  export default {
    components: {
      MenuBottom
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Browse");
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
