<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="page-title-box">
                <div class="float-end">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Unikit</a>
                        </li>
                        <!--end nav-item-->
                        <li class="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <!--end nav-item-->
                        <li class="breadcrumb-item active">Starter</li>
                    </ol>
                </div>
                <h4 class="page-title">{{ title }}</h4>
            </div>
            <!--end page-title-box-->
        </div>
        <!--end col-->
    </div>
</template>

<script>
export default {
    props: ["title"],
};
</script>

<style>
</style>