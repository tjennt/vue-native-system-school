<template>
     <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Button @tap="$modal.close" text="Close" />
        <Label :text="data" />
      </StackLayout>
    </Page>

</template>

<script>
export default {
    props: ['data'],
}
</script>