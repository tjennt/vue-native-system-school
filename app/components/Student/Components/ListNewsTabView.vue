<template>
    <TabView 
        tabTextColor="#000000"
        selectedTabTextColor="#2a4054"
        :selectedIndex="selectedIndex"
        @selectedIndexChange="indexChange"
    >
        <TabViewItem v-for="(button, index) in data.buttons" :key="index" :title="button.text">
            <DetailTabView />
        </TabViewItem>

    </TabView>
</template>

<script>
import DetailTabView from "./DetailTabView";
export default {
    components: {
        DetailTabView
    },
    data() {
        return {
            selectedIndex: 0,
            data: {
                buttons: [
                    {text: 'Bảng tin', id: 1},
                    {text: 'Thông báo', id: 2},
                    {text: 'Tuyển sinh', id: 3}
                ]
            }
        }
    },
    methods: {
        indexChange: function(args) {
            let newIndex = args.value
            // console.log('Current tab index: ' + newIndex)
        }
    }
}
</script>

<style lang="scss">
    
</style>