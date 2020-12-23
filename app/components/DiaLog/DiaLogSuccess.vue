<template>
    <Page class="dialog-success">
        <StackLayout class="bg-dialog">
            <Label class="dialog-title text-main text-center" :text="title"/>
            <Image src="~/assets/images/illustration/success.jpg"></Image>

            <Button class="btn btn-primary" text="Xác nhận" @tap="$modal.close"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    
    export default {
        props: {
            title: {
                type: String, 
                default: 'THÀNH CÔNG'
            } 
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="scss">
    .dialog-success {
        height: auto;
        border-radius: 20;
    }
    .dialog-title {
        padding: 10;
        font-size: 15;
    }
    .action-white {
        height: 60
    }
</style>