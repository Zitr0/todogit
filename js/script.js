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

/*Visualizar Git*/     
     if(clic==1 && clicked_id=="buttonGit"){     

          if(clic==1 && document.getElementById('git').style.display=="none"){
               
               document.getElementById('git').style.display="block";
               document.getElementById('github').style.display="none";
               document.getElementById('ssh').style.display="none";
               document.getElementById('tags').style.display="none";
               clic = clic + 1;

          }else{
               document.getElementById('git').style.display="none";
               clic = 1;
          }

     }

/*Visualizar GitHub*/         
     else if(clic==1 && clicked_id=="buttonGitHub"){

          if(clic==1 && document.getElementById('github').style.display=="none"){
               
               document.getElementById('github').style.display="block";
               document.getElementById('git').style.display="none";
               document.getElementById('ssh').style.display="none";
               document.getElementById('tags').style.display="none";
               clic = clic + 1;

          }else{
               document.getElementById('github').style.display="none";
               clic = 1;
          }
     }

/*Visualizar Ssh*/    
     else if(clic==1 && clicked_id=="buttonSsh"){
        
          if(clic==1 && document.getElementById('ssh').style.display=="none"){
               
               document.getElementById('ssh').style.display="block";
               document.getElementById('git').style.display="none";
               document.getElementById('github').style.display="none";
               document.getElementById('tags').style.display="none";
               clic = clic + 1;

          }else{
               document.getElementById('ssh').style.display="none";
               clic = 1;
          }
     }

/*Visualizar Tags*/         
     else if(clic==1 && clicked_id=="buttonTag"){

          if(clic==1 && document.getElementById('tags').style.display=="none"){
               
               document.getElementById('tags').style.display="block";
               document.getElementById('git').style.display="none";
               document.getElementById('github').style.display="none";
               document.getElementById('ssh').style.display="none";
               clic = clic + 1;

          }else{
               document.getElementById('tags').style.display="none";
               clic = 1;
          }
     }

     else{
   
          clic = 1;
     }
     
}