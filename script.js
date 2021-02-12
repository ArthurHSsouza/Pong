 
           var ballWidth = 0;
           var ballHeight = 0;
           var forward = true;
           var up = true;

           var player1points = 0;
           var player2points = 0;
           
           var racketHeight1 = 200;
           var racketHeight2 = 200;
           var racketSize    = 100;

           window.onload = ()=>{
               setInterval(()=>{ 
                draw()
               },15)
           }
           
         function draw(signal){
            p1  = document.getElementById('player1');
            p2 = document.getElementById('player2');
            p1.innerHTML = "Jogador 1: "+player1points+" pontos"
            p2.innerHTML = "Jogador 2: "+player2points+" pontos"
            var field = document.getElementById("folha");
            var fieldArea = field.getContext('2d');
            
            field.addEventListener('mousemove',event =>{
                racketHeight1 = event.clientY - racketSize/2;
            })


            fieldArea.fillStyle = '#000000';
            fieldArea.fillRect(0,0,600,500); 
            fieldArea.fillStyle = '#ffffff';
            fieldArea.fillRect(297.5,0,5,500);
            fieldArea.fillRect(0,racketHeight1,15, racketSize);
            fieldArea.fillRect(585,racketHeight2,15, racketSize);
            fieldArea.fillRect(ballWidth,ballHeight,10,10);
            
            //validando se vai pra frente ou pra trás
            if(ballWidth == 620){
                 forward = false;
                 player1points +=1;
                
            }else{
            if(ballWidth == -20){
                forward = true;
                player2points +=1;
               }
            }

            if(ballHeight > 500){
                up = false;
            }else{
            if(ballHeight < 0){
                up = true;
               }
            }
        
            if(ballWidth == 585 && ballHeight >= racketHeight2
            && ballHeight <= racketHeight2 + racketSize){
                forward = false;
            }else{
                if(ballWidth == 15 && ballHeight >= racketHeight1
            && ballHeight <= racketHeight1 + racketSize){
                forward = true;
            }else{  
          }
         }
            //validando se deve trocar a direção
            function direct(direction, way){
                if(direction){
                way  += 5;
                }else{
                way  -= 5;
               } 
               return way;
            }
            
            ballWidth  = direct(forward, ballWidth);
            ballHeight = direct(up, ballHeight); 
            
            if(racketHeight2 + racketSize < ballHeight){
               racketHeight2 +=4.7;
           }else{
            racketHeight2 -= 4.7;
           }
        }