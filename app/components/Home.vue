<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" :text="home"/>
        </ActionBar>

        <GridLayout class="page__content">
            <!-- <Label text="HELLOWORD" class="t-12" /> -->

            <!-- <Label class="page__content-icon fas" text.decode="&#xf015;"/>
            <Label class="page__content-placeholder" :text="message"/> -->
            <Label v-show="dataIsNull" class="page__content-notfound" text="Không có dữ liệu sách"></Label>
            <ScrollView v-show="dataIsNull == false">
              <!-- LIST VIEW BOOKS -->
              <ListView for="book in books"
                    style="height:auto">
                <v-template>
                    <Label text="HELLOWORD" class="t-12" />
                    <FlexboxLayout flexDirection="row">
                        <!-- <Image :src="country.imageSrc"
                            class="thumb img-circle" /> -->
                        <Label :text="book.name" class="t-12"
                            style="width: 60%" />
                        <Label :text="book.pages + ' trang'" class="t-12"
                            style="width: 30%" />
                        
                    </FlexboxLayout>
                </v-template>
              </ListView>
            </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
  import axios from "axios";
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";

  export default {
    data(){
      return {
        home: 'Trang Chủ',
        dataIsNull: false,
        books: []
      }
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");

      // GET BOOKS
      let getBooks = this.domain + 'public/api/books';
      axios.get(getBooks, {
        headers: this.$store.state.authHeaderApi
      })
      .then(res=> {
          // console.log(res)
          let respon = JSON.parse(JSON.stringify(res.data));
          if(respon.Status !== 200){
            this.dataIsNull = true;
            return;
          }
          this.dataIsNull = false;
          this.books = respon.Notification.Books;
      })
      .catch(err=> {
          console.log(err)
      })
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
        // console.log(utils)
      },
      alert(message) {
          return alert({
              title: "PROQ TEAM",
              okButtonText: "OK",
              message: message
          });
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
