<template>
    <Page class="home-student">
        <!-- ACCTION BAR -->
        <ActionBar class="action-bar">
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" :text="title"/>
        </ActionBar>

        <!-- CONTENT -->
        <GridLayout rows="*" columns="*">
            <ActivityIndicator row="0" column="0" :busy="isBusy" />
            <Label row="0" column="0" v-show="isData === false" class="page__content-notfound" text="Không có dữ liệu"></Label>
        
            <ListView row="0" column="0" v-show="isData" for="(subject, index) in subjects" @itemTap="getDetail">
                <v-template>
                    <StackLayout class="card-news m-t-5">
                        <StackLayout :class="index % 2 == 0 ? 'shadow-main-wit': 'shadow-main-wit'">
                        
                            <Label :text=" ++index + '/ ' + subject.name" class="label-title" textWrap="true" />
                            <Label :text="subject.content" class="t-12"  textWrap="true"/>
                            
                            <!-- DATE POST NEWS-->
                            <GridLayout rows="auto" columns="10*,auto">
                                <Label rows="0" column="1" text="20/03/2020 - 20/08/2020"/>
                            </GridLayout>
                        </StackLayout>
                    </StackLayout>
                </v-template>
            </ListView>
        </GridLayout>
        <!-- END CONTENT -->
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";
    import Subject from "./Components/Subject";

export default {
    components: {
        Subject
    },
    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("StudingSubjects")
        this.subjects = [
            {
                name: 'Javascript',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'PHP',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'Tin học văn phòng',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'Tin học cơ sở',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'Javascript',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'PHP',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'Tin học văn phòng',
                content: 'Đây là môn học cơ bản về javascript'
            },
            {
                name: 'Tin học cơ sở',
                content: 'Đây là môn học cơ bản về javascript'
            }
        ]
    },
    data() {
        return {
            title: 'MÔN ĐANG HỌC',
            subjects: [],
            isBusy: false,
            isData: true,
            Subject: Subject
        }
    },
    computed: {
         
    },
    methods: {
        getDetail(args){
            this.$navigateTo(this.Subject, {
                fullscreen: true,  
                props: { data: args.item }
            })
        },
        onDrawerButtonTap() {
            utils.showDrawer()
        },
        alert(message) {
          return alert({
              title: "PROQ TEAM",
              okButtonText: "OK",
              message: message
          });
        }
    }
}
</script>

<style lang="scss">

</style>