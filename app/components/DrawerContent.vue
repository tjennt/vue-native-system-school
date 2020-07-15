<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="header-wit">
            <Image class="nt-drawer__header-image" src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/104869375_1750187698484058_4901889475050639470_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=yvbFXzELaDEAX_nTgo0&_nc_ht=scontent-xsp1-2.xx&oh=5a453bc22bda37e34145dea8a11f4a92&oe=5F2CA9BE"/>
            <Label class="header-wit-text" :text="name"/>
            <Label class="header-wit-footer" :text="roleName"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <!-- START MENU -->
            <StackLayout>
              <!-- <StackLayout :class="'' + (selectedPage === 'Home' ? ' selected': '')"
                            @tap="onNavigationItemTap(Home)"
              >
                  <Label text.decode="&#xf015;" class="nt-icon fas menu-wit-icon"/>
                  <Label text="Trang chủ" class="p-r-10 menu-wit-text"/>
              </StackLayout> -->
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' selected': '')"
                            @tap="onNavigationItemTap(Home)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Trang chủ" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' selected': '')"
                            @tap="onNavigationItemTap(Browse)">
                    <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
                    <Label col="1" text="Danh sách lịch học" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' selected': '')"
                            @tap="onNavigationItemTap(Search)">
                    <Label col="0" text.decode="&#xf002;" class="nt-icon fas"/>
                    <Label col="1" text="Tìm kiếm" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' selected': '')"
                            @tap="onNavigationItemTap(Featured)">
                    <Label col="0" text.decode="&#xf005;" class="nt-icon fas"/>
                    <Label col="1" text="Ưu Thích" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' selected': '')"
                            @tap="onNavigationItemTap(Settings)">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Cài đặt" class="p-r-10"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Logout' ? ' selected': '')"
                            @tap="onNavigationItemTap(Login)">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Đăng xuất" class="p-r-10 logout"/>
                </GridLayout>
            </StackLayout>
            <!-- END MENU -->
        </ScrollView>
    </GridLayout>
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
        name() {
            // return this.$store.state.shipStore.state.bill;
            return 'Nguyễn Tấn Tiền';
            // console.log(this.$store.state.shipStore)
        },
        roleName() {
          return 'Quản trị viên';
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
</style>
