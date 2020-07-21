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
        <!-- <GridLayout rows="30, 5,auto">
            <DockLayout row="0" stretchLastChild="false">
                <Label dock="left" class="text-title" text="Lớp: WD14301"></Label>
                <Label dock="right" class="text-title" text="Tổng: 43"></Label>
            </DockLayout>
            <StackLayout row="1" class="hr" /> -->
            <!-- <ScrollView row="2" v-show="isData"> -->
                <ListView row="2" for="(newsD, index) in data.news" class="list-group">
                    <v-template>
                        <GridLayout class="list-group-item" rows="*,*" columns="auto, *,*">
                            <Label row="0" col="0" :text="index + 1 + ' / WD14301'.toUpperCase()" class="text-number-sd"/>
                            <Image row="1" col="0" :src="newsD.imageSrc" class="thumb img-circle" />
                            <Label row="1" col="1" style="font-size: 14px" :text="newsD.name + ' - Ca 1'" />
                            <Button row="1" col="2" text="Điểm danh" @tap="getDetailClass(newsD)" class="btn btn-primary"></Button>
                        </GridLayout>
                    </v-template>
                </ListView>
            <!-- </ScrollView> -->

            <!-- </StackLayout> -->
        <!-- </GridLayout> -->
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../../../shared/selected-page-service";

    import Attendance from "./Attendance";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("ClassStudyToday");
            this.data.news = [
                        {
                            name: "WD14301",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png",
                            checked: false
                        },
                        {
                            name: "WD14302",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png",
                            checked: false
                        },
                        {
                            name: "WD14303",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png",
                            checked: false
                        },
                        {
                            name: "WD14304",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png",
                            checked: false
                        },
                        {
                            name: "WD14305",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png",
                            checked: false
                        },
                        {
                            name: "WD14306",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png",
                            checked: false
                        },
                        {
                            name: "WD14307",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png",
                            checked: false
                        },
                        {
                            name: "WD14308",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png",
                            checked: false
                        },
                        {
                            name: "WD14309",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png",
                            checked: false
                        },
                        {
                            name: "WD14310",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png",
                            checked: false
                        },
                        {
                            name: "WD14311",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png",
                            checked: true
                        },
                        {
                            name: "WD14312",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png",
                            checked: false
                        }
                    ];
        },
        components: {
            Attendance
        },
        data() {
            return {
                title: 'LỊCH DẠY HÔM NAY',
                isBusy: false,
                data: {
                    news: []
                },
                isData: true,
                Attendance: Attendance
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            getDetailClass(newsD) {
                this.$navigateTo(this.Attendance, {
                    animated: true,
                    transition: {
                        // name: 'flip',
                        // duration: 200,
                        // curve: 'linear'
                    },
                    props: {
                        foo: 'bar',
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
 .text-number-sd {
     font-size: 10;
     font-weight: bold;
 }
</style>