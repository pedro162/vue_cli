<template>
    <div>
        <p>Fala o download dos aquivos</p>
        <button>Download</button>
    </div>
</template>

<script>
export default {
    name:'AulaDownload',
    created(){
        console.log('AulaDownload component was created')
    },
    unmounted(){
        console.log('AulaDownload component was destroyed')
    },
}
</script>

<style>
</style>