<template>
    <div class="listNavContainer">
         <ul>
            <li><a href="#">家居</a></li>
            <li><a href="#">家具</a></li>
            <li><a href="#">文具</a></li>
            <li><a href="#">数码</a></li>
            <li><a href="#">玩乐</a></li>
            <li><a href="#">厨卫</a></li>
            <li><a href="#">美食</a></li>
            <li><a href="#">男装</a></li>
            <li><a href="#">女装</a></li>
            <li><a href="#">童装</a></li>
        </ul>
    </div>
</template>
<script>
export default {
  name:"ListNav"
}
</script>
<style scoped>
    .listNavContainer{
        width:100%;
       
        height:30px;
        background-color: #bf0524;
    }
    .listNavContainer ul{
         width:1050px;
        margin:0 auto;
        height:30px;
    }
    .listNavContainer ul li{
        float: left;
        width:105px;
        height:30px;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
        background-color: #bf0524;
    }
    .listNavContainer ul li a{
        color:black
    }
    .listNavContainer ul li:hover{
        background: red;
       
    }
    .listNavContainer ul li:hover a{
        color:white;
    }
</style>

