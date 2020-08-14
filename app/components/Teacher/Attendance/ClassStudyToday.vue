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
        <ListView row="2" for="(newsD, index) in data.news" class="list-group">
            <v-template>
                <GridLayout class="list-group-item" rows="*,*" columns="auto, *,*">
                    <Label row="0" col="0" :text="index + 1 + ' / WD14301'.toUpperCase()" class="text-number-sd"/>
                    <Image row="1" col="0" :src="newsD.imageSrc" class="thumb img-circle" />
                    <Label row="1" col="1" style="font-size: 14px" :text="newsD.name + ' - Ca 1'" />
                    <Button row="1" col="2" text="Điểm danh" :isEnabled="!newsD.checked" @tap="getDetailClass(newsD, index)" class="btn btn-primary"></Button>
                    <ActivityIndicator row="1" col="2" :busy="newsD.checked"></ActivityIndicator>
                </GridLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";

    import Attendance from "./Attendance";
import { async } from 'rxjs/internal/scheduler/async';

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
                isEnabled: true,
                Attendance: Attendance
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            getDetailClass(news, index) {
                this.data.news[parseInt(index)].checked = true

                setTimeout(()=> {
                    this.$navigateTo(this.Attendance, {
                        // animated: true,
                        // transition: {
                        //     name: 'flip',
                        //     duration: 200,
                        //     curve: 'linear'
                        // },
                        props: {
                            foo: 'bar',
                        }
                    }).then(()=> {
                        this.data.news[parseInt(index)].checked = false
                    })
                }, 100)
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