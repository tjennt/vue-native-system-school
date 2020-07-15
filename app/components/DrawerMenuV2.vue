<template lang="html">
    <!-- <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="header-wit">
            <Image class="nt-drawer__header-image" src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/104869375_1750187698484058_4901889475050639470_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=yvbFXzELaDEAX_nTgo0&_nc_ht=scontent-xsp1-2.xx&oh=5a453bc22bda37e34145dea8a11f4a92&oe=5F2CA9BE"/>
            <Label class="header-wit-text" :text="status"/>
            <Label class="header-wit-footer" text="Quản trị viên"/>
        </StackLayout> -->
        <Page class="draw-menu">
            <!-- START MENU -->
            <GridLayout columns="*, *, *, *, *" rows="auto">
                <StackLayout row="0" col="0" :class="'menu-wit-layout' + (selectedPage === 'Home' ? ' selected': '')"
                            @tap="onNavigationItemTap(Home)"
                >
                    <Label text.decode="&#xf015;" class="nt-icon fas menu-wit-icon"/>
                    <Label text="Trang chủ" class="p-r-10 menu-wit-text"/>
                </StackLayout>
                <StackLayout row="0" col="1" :class="'menu-wit-layout' + (selectedPage === 'Browse' ? ' selected': '')"
                            @tap="onNavigationItemTap(Browse)"
                >
                    <Label text.decode="&#xf1ea;" class="nt-icon far menu-wit-icon"/>
                    <Label text="Danh sách" class="p-r-10 menu-wit-text"/>
                </StackLayout>

                <StackLayout row="0" col="2" :class="'menu-wit-layout' + (selectedPage === 'Featured' ? ' selected': '')"
                            @tap="onNavigationItemTap(Featured)"
                >
                    <Label col="0" text.decode="&#xf005;" class="nt-icon fas menu-wit-icon"/>
                    <Label col="1" text="Ưu Thích" class="p-r-10 menu-wit-text"/>
                </StackLayout>
                <StackLayout row="0" col="3" :class="'menu-wit-layout' + (selectedPage === 'Settings' ? ' selected': '')"
                            @tap="onNavigationItemTap(Settings)"
                >
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas menu-wit-icon"/>
                    <Label col="1" text="Cài đặt" class="p-r-10 menu-wit-text"/>
                </StackLayout>
                <StackLayout row="0" col="4" :class="'menu-wit-layout' + (selectedPage === 'Logout' ? ' selected': '')"
                            @tap="onNavigationItemTap(Login)"
                >
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas menu-wit-icon"/>
                    <Label col="1" text="Đăng xuất" class="p-r-10 menu-wit-text"/>
                </StackLayout>
            </GridLayout>    
        </Page>
<!-- 
            </ScrollView>
    </GridLayout> -->
</template>

<script>
  import Home from "./Home";
  import Browse from "./Browse";
  import Featured from "./Featured";
  import Search from "./Search";
  import Settings from "./Settings";
  import Login from "./Login";
  import * as utils from "~/shared/utils";
  import SelectedPageService from "~/shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage);
    },
    computed: {
        status() {
            // return this.$store.state.shipStore.state.bill;
            return 'Nguyễn Tấn Tiềsn';
            // console.log(this.$store.state.shipStore)
        }
    },
    data() {
      return {
        Home: Home,
        Browse: Browse,
        Featured: Featured,
        Search: Search,
        Settings: Settings,
        Login: Login,
        selectedPage: ""
      };
    },
    components: {
      Home,
      Browse,
      Featured,
      Search,
      Settings,
      Login
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables
    .logout {
      color: #2a4054;
      font-weight: bold;
    }
    // Custom styles
    .draw-menu {
        z-index: 99;
        // margin-top: 665;
        // position: absolute;
        // top: 0;
        // overflow: hidden;
        float: left;
        background-color: #fff;
        max-height: 30;
    }
</style>
