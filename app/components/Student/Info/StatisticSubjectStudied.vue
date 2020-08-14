<template>
    <Frame>
      <Page class="statistic-subject">
        <ActionBar class="action-bar">
            <NavigationButton text="" android.systemIcon="ic_menu_close_clear_cancel" @tap="$modal.close"/>
            <Label class="action-bar-title" :text="title"/>

        </ActionBar>
        <StackLayout>
            
        </StackLayout>
      </Page>
    </Frame>
</template>

<script>
    
    export default {
        data(){
            return {
                title: 'THỐNG KÊ MÔN ĐÃ HỌC',
                pieSource: [
                    { Brand: "Audi", Amount: 10 },
                    { Brand: "Mercedes", Amount: 76 },
                    { Brand: "Fiat", Amount: 60 },
                    { Brand: "BMW", Amount: 24 },
                    { Brand: "Crysler", Amount: 40 }
                ],
            }
        }
    }
</script>

<style lang="scss">
    // .statistic-subject {
    // }
</style>