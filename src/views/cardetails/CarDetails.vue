<template>
    <div class="justify-content-evenly row">
         <div class="col-8" v-for="data in getCarInfo " :key="data.id" >
            <div >
                <img :src="getImageUrl(data.name,data.mainImage)" alt="" class="rounded mx-auto d-block  mainImage">
             
            </div>
        
            <div class="justify-content-center row"  v-for="(eachCarImage,i) in data.images" :key="i" >
           
                <img :src="getImageUrl(data.name,eachCarImage)" alt="" class="rounded mx-auto d-block  h-50 w-50 thumbnailImage">
             

            </div>
             
         </div>
         <div class="col-4"></div>
    </div>
</template>
<script>
import cardetails from "../../json/cars_details.json"
export default{
    name:"CarDetails",
   data(){
    return {
    myCarDetails:cardetails,
    
        // carName :this.$route.params.category,
        // carFiled:this.$route.params.id
}
},
methods:{
getImageUrl(folderName,imageName){
let image = require.context("@/assets/");
return image("./" + folderName + "/" + imageName)
}
},
computed:{
    getCarInfo(){
        let carData = ""
        switch(this.$route.params.category){
            case "Honda" :
            carData =  this.myCarDetails.Honda.filter((data)=>{
                    return   data.id == this.$route.params.id
                }) 
                console.log(carData);
                break;
                case "Toyota" :
                    carData = this.myCarDetails.Toyota.filter((data)=>{
                        return  data.id == this.$route.params.id
                }) 
                    break;
                    case "Chevrolet" :
                        carData = this.myCarDetails.Chevrolet.filter((data)=>{
                            return   data.id == this.$route.params.id
                }) 
                        break;
                        case "Ford" :
                            carData = this.myCarDetails.Ford.filter((data)=>{
                                return   data.id == this.$route.params.id
                }) 
                            break;
                         case "Tata" :
                            carData = this.myCarDetails.Tata.filter((data)=>{
                                return   data.id == this.$route.params.id
                }) 
                            break;
                            default :
                            carData = this.myCarDetails
        }
        
        return carData ;
        
    }

},mounted(){
  (this.$route);
}
}
</script>

<style scoped>
.mainImage{
    width:650px;
    height:450px;
    border :10px solid #eee;
    margin-bottom : 10px;
}
.thumbnailImage{
    width: 150px;
border:10px solid #eee ;
}

</style>