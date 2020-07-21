<template>
    <Page class="home-student" loaded="onPageLoaded">
        <!-- ACCTION BAR -->
        <ActionBar class="action-bar">
            <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>

            <Label class="action-bar-title" :text="title"/>

        </ActionBar>

        <!-- CONTENT -->
        <!-- <GridLayout rows="30, 5,auto">

            <DockLayout row="0" stretchLastChild="false">
                <Label dock="left" class="text-title" text="Lớp: WD14301"></Label>
                <Label dock="right" class="text-title" text="Tổng: 43"></Label>
            </DockLayout>
            <StackLayout row="1" class="hr" /> -->
        <!-- <ScrollView v-show="isData"> -->

        <StackLayout>
            <ListView 
                for="(newsD, index) in data.news" 
                class="list-group" 
                verticalAlignment="top"
                height="91%"
            >
                <v-template>
                    <GridLayout class="list-group-item" rows="*,*" columns="auto, *, 1*">
                        <Label row="0" col="0" :text="index + 1 + ' /  Ps09110'.toUpperCase()" class="text-number-sd"/>
                        <!-- <Label row="0" col="0" :text="index + 1" /> -->
                        <Image row="1" col="0" :src="newsD.imageSrc" class="thumb img-circle" />
                        <Label row="1" col="1" :text="newsD.name" />
                        <Switch row="1" col="2" :checked="newsD.checked" />
                    </GridLayout>
                </v-template>
            </ListView>

            <GridLayout verticalAlignment="top" height="9%" rows="*" columns="*,auto" class="input-field" >
                <TextField 
                    class="input" 
                    hint="Ghi chú..."
                    :isEnabled="!isBusy"
                    keyboardType="email" autocorrect="false"
                    autocapitalizationType="none"
                    returnKeyType="next"
                    v-model="note"
                ></TextField>
                <Button column="1" text="Lưu điểm danh" class="btn btn-primary"
                    :isEnabled="!isBusy"
                    @tap="saveAtendance"
                ></Button>
                <ActivityIndicator rowSpan="3" :busy="isBusy"></ActivityIndicator>
            </GridLayout>
        </StackLayout>
        <!-- </ScrollView> -->

            <!-- </StackLayout> -->
        <!-- </GridLayout> -->
    </Page>
</template>

<script>
    export default {
        mounted() {
        
        },
        data() {
            return {
                title: 'ĐIỂM DANH LỚP WD14301',
                isBusy: false,
                note: '',
                data: {
                    buttons: [
                        {text: 'Bảng tin', id: 1},
                        {text: 'Thông báo', id: 2},
                        {text: 'Tuyển sinh', id: 3}
                    ],
                    news: [
                        {
                            name: "Nguyễn Tấn Tiền",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png",
                            checked: false
                        },
                        {
                            name: "Czech Republic",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png",
                            checked: false
                        },
                        {
                            name: "Germany",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png",
                            checked: false
                        },
                        {
                            name: "Spain",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png",
                            checked: false
                        },
                        {
                            name: "Ethiopia",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png",
                            checked: false
                        },
                        {
                            name: "Croatia",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png",
                            checked: false
                        },
                        {
                            name: "Hungary",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png",
                            checked: false
                        },
                        {
                            name: "Italy",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png",
                            checked: false
                        },
                        {
                            name: "Jamaica",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png",
                            checked: false
                        },
                        {
                            name: "Romania",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png",
                            checked: false
                        },
                        {
                            name: "Russia",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png",
                            checked: true
                        },
                        {
                            name: "United States",
                            imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png",
                            checked: false
                        }
                    ]
                },
                isData: true
            }
        },
        computed: {
            
        },
        methods: {
            saveAtendance() {
                this.isBusy = true;
                setTimeout(()=> {
                    this.isBusy = false;
                    alert('ĐIỂM DANH THÀNH CÔNG');
                }, 500);
            }
        }
    }
</script>

<style lang="scss">
    .text-number-sd {
        font-size: 8;
        font-weight: bold;
    }

</style>