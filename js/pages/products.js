$(document).ready(function () {
    // function getCategories() { 
    //     fetch("../db/category.json") 
    //         .then((res) => { 
    //         return res.json(); 
    //     }) 
    //     .then((data) => console.log(data)); 
    // }


    // const category=[
    //     {
    //         "id":0,
    //         "name":"--Choose--"
    //     },
    //     {
    //         "id":1,
    //         "name":"Intermediates"
    //     },
    //     {
    //         "id":2,
    //         "name":"API"
    //     },
    //     {
    //         "id":3,
    //         "name":"Excipients"
    //     }
    // ]
    // function bindCategories(){
    //     var options =  '<option value=""><strong>--Choose--</strong></option>';
    //     for(let i=0;i<category.length;i++){
    //         options += '<option value="'+category[i].id+'">'+category[i].name+'</option>';
    //     }
    //     $('#ddCategory').html(options);
    // }
   // bindCategories()    

    function bindProducts(){
        for(let i=0;i<products.length;i++){
            $('#productTable').append('<tr><td>'+(i+1)+'</td><td>'+products[i].Category+'</td><td>'+products[i].Product+'</td></tr>');
        }
        
    }
    bindProducts()
})