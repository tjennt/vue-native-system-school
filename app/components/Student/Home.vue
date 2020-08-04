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
        <GridLayout rows="auto, auto">
            <GridLayout row="0" columns="*,*,*">
                <Label v-for="(button, index) in data.buttons" 
                    :key="index" 
                    @tap="getdataInfo(button.id, index)"
                    :column="index"
                    :text="button.text"
                    class="categories-title"
                    :class=" index == category ? 'selected-category' : ''"

                ></Label>
            </GridLayout>
            <!-- <Label row="1" text="hr"> -->
            <StackLayout row="1">
                <ActivityIndicator :busy="isBusy" />
                <Label v-show="isData === false" class="page__content-notfound" text="Không có dữ liệu"></Label>

                <ScrollView ref="scrollView" v-show="isData">
                    <ListView for="(newsD, index) in data.news" @itemTap="newsDetailM"
                        style="height:1380px">
                        <v-template>
                            <StackLayout class="card-news" :class="index % 2 == 0 ? '': 'bg-center'">
                                <!-- <Image :src="newsD.imageSrc" class="thumb img-circle" /> -->
                                <Label :text="newsD.name" class="label-title" textWrap="true" />
                                <Label :text="newsD.content" class="t-12"  textWrap="true"/>
                                
                                <!-- DATE POST NEWS C:\Program Files\AdoptOpenJDK\jdk8u192-b12-->
                                <GridLayout rows="auto" columns="10*,auto">
                                    <Label rows="0" column="1" text="20/03/2020"/>
                                </GridLayout>
                            </StackLayout>
                        </v-template>
                    </ListView>
                </ScrollView>

            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../../shared/selected-page-service";
    import NewsDetail from './Components/NewsDetail';
export default {
    mounted() {
        this.data.news = [
                    {
                        name: "Thông báo về việc ngừng hỗ trợ sinh viên đóng học phí trực tiếp",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                    },
                    {
                        name: "Czech Republic",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                    },
                    {
                        name: "Germany",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                    },
                    {
                        name: "Spain",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    },
                    {
                        name: "Ethiopia",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                    },
                    {
                        name: "Spain",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    }
                ];
    },
    data() {
        return {
            title: 'TRANG CHỦ HỌC SINH',
            isBusy: false,
            newsDetail: NewsDetail,
            data: {
                buttons: [
                    {text: 'Bảng tin', id: 1},
                    {text: 'Thông báo', id: 2},
                    {text: 'Tuyển sinh', id: 3}
                ],
                news: []
            },
            isData: true,
            category: 0
        }
    },
    computed: {
         
    },
    methods: {
        getdataInfo(button, index) {
            this.isBusy = true;
            this.isData = true;
            if(button == 2) {
                setTimeout(()=> {
                    this.data.news = [{
                        name: "Thông báo về việc ngừng hỗ trợ sinh viên",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                    },
                    {
                        name: "Czech Republic",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                    },
                    {
                        name: "Germany",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                    },
                    {
                        name: "Spain",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    },
                    {
                        name: "Ethiopia",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                    }]; 
                    this.isBusy = false;
                    }, 300);
            }else if (button == 1){
                setTimeout(()=> {
                    this.data.news = [
                    {
                        name: "Thông báo về việc ngừng hỗ trợ sinh viên",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                    },
                    {
                        name: "Czech Republic",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                    },
                    {
                        name: "Germany",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                    },
                    {
                        name: "Spain",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    },
                    {
                        name: "Ethiopia",
                        content: "Ngày 13-02-2020 trường đã có quyết định mới dành cho sinh viên về việc đóng học phí với giá rẻ bất ngờ cho mọi người",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                    }
                ];
                    this.isBusy = false;
                    }, 100);
            }else{
                setTimeout(()=> {
                    this.isBusy = false;
                    this.isData = false;
                    }, 100);
            }
            this.category = index;
        },
        newsDetailM(args) {
            this.$navigateTo(this.newsDetail, { 
                fullscreen: true,  
                props: { data: args.item }
            });
        },
        onDrawerButtonTap() {
            utils.showDrawer();
            // console.log(utils)
        },
    }
}
</script>

<style lang="scss">
.categories-title {
    padding: 10;
    text-align: center;
    font-size: 20;
    font-weight: bold;
}
.selected-category {
    border-bottom-width: 5;
    border-color: #2a4054;
}
.card-news {
    border: 5 #000 solid;
}
.bg-center {
    background-color: rgba(42,64,84, 0.2);
}
.label-title {
    font-size: 20;
    font-weight: bold;
}
.float-right {
    float: right;
}
</style>