<template>
    <div class="bg">
          
       <table border="1" cellspacing="0" cellpadding="0" >
      
           <tbody>
               <tr v-for="item of region" :key='item.key'>
                   <td>{{item.province}}</td>
                   <td>{{item.city}}</td>
                   <td>{{item.districts}}</td>
               </tr>

           </tbody>
         
       </table>

    </div>
</template>
<script>
export default {
    props:['region'],
}
</script>
<style scoped>
.bg{
    background-color: #fff ;
    height:calc(100vh - 300px);
    overflow-x:scroll;
    padding:  10px;
    font-size: 14px;
}
table{
    width:100%;
    border: 0.5px solid #aaa;
    border-collapse: collapse;
}

table tbody tr td:nth-child(2){
    width: 40%;
}
table,table thead th,table tr td {
     border:1px solid #aaa;
     padding: 5px;
     font-weight: 500;
     text-align: left;

     
}

</style>