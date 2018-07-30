<template>
    <footer class="footer">
        <div>
            <nav class="links">
                <ul class="list-inline">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About us</a>
                    </li>
                    <li>
                        <a href="/contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer{
        padding-top: 1%;
        padding-bottom: 1%;
        background: #364b59;
        color: rgba(255, 255, 255, 0.6);
    }
    .links{
        margin-left: 0;
        display: inline-block;
        margin: 0 auto;
        margin-bottom: 30px;
        font-size: 14px;
        text-transform: uppercase;
    }
    .list-inline{
        list-style: none;
    }
</style>


