<script>
   export default {
    name: 'Header'
   }
</script>

<template>
    <header>
        <h1>HANGMAN</h1>
        <p>Find the hidden word - Enter a letter</p>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;        
    }
</style>