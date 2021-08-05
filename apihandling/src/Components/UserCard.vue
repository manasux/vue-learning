<template>
    <div class="card border-primary">
        <div class="card-body text-center">
            <img 
            :src="user.picture?.large"
            height="150"
            width="150"
            class="rounded-circle img-thumbnail border-danger zoomIn"
            >  
            <div class="card-title text-primary d-flex flex-column">
                <h1>
                    <span class="pl-2"> {{user.name?.title}} </span>
                    <span class="pl-2"> {{user.name?.first}} </span>
                    <span class="pl-2"> {{user.name?.last}} </span>
                </h1>
                <i class="fas fa-envelope text-black"> {{user.email}} </i>
                <i class="fas fa-map-marker-alt"> {{user.location?.state}} </i>
                <i class="fas fa-phone"> {{user.phone}} </i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: ["user"],
}
</script>

<style>

</style>