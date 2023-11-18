$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date = new Date()
    var displayDate = "date:" +date.toLocaleDateString() 



    $(function () {
        $("#predict_button").click(function () {
            //AJAX call
            let input_data = {"text":$("#text").val()}
            $.ajax({
                type:'POST',
                url:'/predict_emotion',
                data:JSON.stringify(input_data),
                dataType:"json",
                contentType:"application/json",
                success:function(Result)
    
                
                  {
                    
                    // Result Received From Flask ----->JavaScript
                    predicted_emotion  = Result.data.predict_emotion
                    emo_url = Result.data.predict_img_url
                    // Display Result Using JavaScript----->HTML
                    $("#prediction").html(predicted_emotion)
                    $("#prediction").css("display","block")
                    $("#emo_img_url").atr('src',emo_url)
                    $("#emo_img_url").css("display","block")
                },
                //Error function
                error:function(Result){
                    alert(Result.responseJSON.message)
                }
            });
        });
    })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
