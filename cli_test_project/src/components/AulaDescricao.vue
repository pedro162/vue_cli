<template>
    <div>
        <p>Essa é aula principal do curso</p>
    </div>
</template>

<script>
export default {
    name:'AulaDescricao',
    created(){
        console.log('AulaDescricao component was created')
    },
    unmounted(){
        console.log('AulaDescricao component was destroyed')
    },
}
</script>

<style>
</style>