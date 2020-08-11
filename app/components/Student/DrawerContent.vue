<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="header-wit" @tap="onNavigationItemTap(InfoStudent)">
            <Image class="nt-drawer__header-image" src="~/assets/image-app.jpg"/>
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
                            :class="'nt-drawer__list-item' + (selectedPage === 'InfoStudent' ? ' selected': '')"
                            @tap="onNavigationItemTap(InfoStudent)">
                    <Label col="0" text.decode="&#xf007;" class="nt-icon far"/>
                    <Label col="1" text="Thông tin cá nhân" class="p-r-10"/>
                </GridLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'StudingSubjects' ? ' selected': '')"
                            @tap="onNavigationItemTap(StudingSubjects)">
                    <Label col="0" text.decode="&#xf02e;" class="nt-icon far"/>
                    <Label col="1" text="Môn đang học" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Schedule' ? ' selected': '')"
                            @tap="onNavigationItemTap(Schedule)">
                    <Label col="0" text.decode="&#xf073;" class="nt-icon far"/>
                    <Label col="1" text="Thời khóa biểu" class="p-r-10"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Logout' ? ' selected': '')"
                            @tap="onNavigationItemTap(Login)">
                    <Label col="0" text.decode="&#xf2f5;" class="nt-icon fas"/>
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
  import InfoStudent from "./Info/InfoStudent";

  import * as utils from "~/shared/utils";
  import SelectedPageService from "~/shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage)
      console.log(this.selectedPage)
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
        InfoStudent: InfoStudent,
        selectedPage: ""
      };
    },
    components: {
      Home,
      StudingSubjects,
      Schedule,
      Login,
      InfoStudent
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
