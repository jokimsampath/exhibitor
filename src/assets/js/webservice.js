var apiUrl = "";
function webService(type, endPoint, data) {
    alert(JSON.stringify(data));
    return;
    $.ajax({
        type: type,
        url: apiUrl+endPoint,
        data: data,
        //DataType:"text/html",
        success: function (response) {
            return response;
         },error: function(response){
            return response;    
        }
    });
}
