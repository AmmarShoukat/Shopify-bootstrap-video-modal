// js to stop video on close modal
<script>
jQuery(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
   
    
    /* Assign empty url value to the iframe src attribute when modal hide, which stop the video playing */
    $(".nws_model").on('hide.bs.modal', function(e){
        $("#cartoonVideo"+$(this).attr('data-attr-model') ).attr('src', '');
        console.log($(this).attr('data-attr-model'));
        console.log( $("#cartoonVideo"+$(this).attr('data-attr-model') ).attr('data_backup_src') );
      
    });
    /* Assign the initially stored url back to the iframe src attribute when modal is displayed again */
    $(".nws_model").on('show.bs.modal', function(e){
      var url = $("#cartoonVideo"+$(this).attr('data-attr-model') ).attr('data_backup_src');
        $("#cartoonVideo"+ $(this).attr('data-attr-model') ).attr('src' , url );
      
    });
});
</script>
