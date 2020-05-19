function toggleColumn(n) {
       var currentClass = document.getElementById("mytable").className; 
       if (currentClass.indexOf("show"+n) != -1) {
            document.getElementById("mytable").className = currentClass.replace("show"+n, ""); 
        } else {
             document.getElementById("mytable").className += " " + "show"+n; 
        } 
}

var clic = 1;

function mostrar(clicked_id){
     
     /*
     if(clic==1 && clicked_id=="git"){
          document.getElementById('post').style.display="block";
          clic = clic + 1;
      }
     else{
          document.getElementById('post').style.display="none";
          clic = 1;
     }
     */

     if(clic==1 && clicked_id=="buttonGit"){
          document.getElementById('git').style.display="block";
          clic = clic + 1;
     }
     else{
          document.getElementById('git').style.display="none";
          clic = 1;
     }

     if(clic==1 && clicked_id=="buttonGitHub"){
          document.getElementById('github').style.display="block";
          clic = clic + 1;
     }
     else{
          document.getElementById('github').style.display="none";
          clic = 1;
     }
     
     if(clic==1 && clicked_id=="buttonSsh"){
          document.getElementById('ssh').style.display="block";
          clic = clic + 1;
     }
     else{
          document.getElementById('ssh').style.display="none";
          clic = 1;
     }

     if(clic==1 && clicked_id=="buttonTag"){
          document.getElementById('tags').style.display="block";
          clic = clic + 1;
     }
     else{
          document.getElementById('tags').style.display="none";
          clic = 1;
     }

          
}