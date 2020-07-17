<template>
    <BottomNavigation height="400px">
        <TabStrip>
            <TabStripItem @tap="onNavigationItemTap(Home)">
                <Label text="Trang chủ"></Label>
                <Image src="res://home"></Image>
            </TabStripItem>
            <TabStripItem @tap="onNavigationItemTap(Browse)">
                <Label text="Danh sách"></Label>
                <Image src="res://settings"></Image>
            </TabStripItem>
            <TabStripItem @tap="onNavigationItemTap(Search)">
                <Label text="Tìm kiếm"></Label>
                <Image src="res://search"></Image>
            </TabStripItem>
            <TabStripItem @tap="onNavigationItemTap(Featured)">
                <Label text="Ưu thích"></Label>
                <Image src="res://search"></Image>
            </TabStripItem>
            <TabStripItem @tap="onNavigationItemTap(Settings)">
                <Label text="Cài đặt"></Label>
                <Image src="res://settings"></Image>
            </TabStripItem>
        </TabStrip>
        <TabContentItem>
            <GridLayout>
                <Label text="" class="h2 text-center">
                </Label>
            </GridLayout>
        </TabContentItem>
        <TabContentItem>
            <GridLayout>
                <Label text="" class="h2 text-center">
                </Label>
            </GridLayout>
        </TabContentItem>
        <TabContentItem>
            <GridLayout>
                <Label text="" class="h2 text-center">
                </Label>
            </GridLayout>
        </TabContentItem>
        <TabContentItem>
            <GridLayout>
                <Label text="" class="h2 text-center">
                </Label>
            </GridLayout>
        </TabContentItem>
        <TabContentItem>
            <GridLayout>
                <Label text="" class="h2 text-center">
                </Label>
            </GridLayout>
        </TabContentItem>
    </BottomNavigation>
</template>

<script>
    import Home from "./Home";
    import Browse from "./Browse";
    import Featured from "./Featured";
    import Search from "./Search";
    import Settings from "./Settings";
    import Login from "./Login";

    export default {
        components: {
            Home,
            Browse,
            Featured,
            Search,
            Settings,
            Login
        },
        data() {
            return {
                Home: Home,
                Browse: Browse,
                Featured: Featured,
                Search: Search,
                Settings: Settings,
                Login: Login
            }
        },
        methods: {
            onNavigationItemTap(component) {
                this.$navigateTo(component, {
                clearHistory: true
                });
            }
        }
    }
</script>