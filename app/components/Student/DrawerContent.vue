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
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' selected': '')"
                            @tap="onNavigationItemTap(Home)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Trang chủ" class="p-r-10"/>
                </GridLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'StudingSubjects' ? ' selected': '')"
                            @tap="onNavigationItemTap(StudingSubjects)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Môn đang học" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Schedule' ? ' selected': '')"
                            @tap="onNavigationItemTap(Schedule)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Thời khóa biểu" class="p-r-10"/>
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
  import StudingSubjects from "./Subjects/StudingSubjects";
  import Schedule from "./Schedule/Schedule";
  import Login from "../Login";

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
          return 'Học sinh';
        }
    },
    data() {
      return {
        Home: Home,
        StudingSubjects: StudingSubjects,
        Schedule: Schedule,
        Login: Login,
        selectedPage: ""
      };
    },
    components: {
      Home,
      StudingSubjects,
      Schedule,
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
