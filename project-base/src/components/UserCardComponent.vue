<template>
    <div class="card">
        <div class="row">
            <div class="col-3">
                <img src="src\assets\images\avatar.jpg" class="card-img" alt="Imagen de perfil">
            </div>
            <div class="col-9">
                <h5 class="card-title">Alello23</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.progress-bar{
    width: 50%;
}
.card-title{
    margin-top: 1rem;
    font-weight: 600;
}
.card-img{
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
    margin-left: 1rem;
}
.card{
    border-radius: 7px;
    background-color: #87CEEB;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
}
.progress{
    margin-top: 1rem;
    margin-right: 1rem;
}
</style>