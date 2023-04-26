const driveLight = document.querySelector('.drive');
const cautionLight = document.querySelector('.caution');
const stopLight = document.querySelector('.stop');
const speed = document.querySelector('.speed');
const lights = document.querySelector('.lights');

let count = 0;

robot();

function robot(){
    let time = setInterval(() => {
        count++;

        if(count <= 6){
            driveLight.style.background = 'lime';
            cautionLight.style.background = 'gray';
            stopLight.style.background = 'gray';
            speed.style.color = 'black'
            speed.innerText = '60km/hr'
        }
        if(count > 6 && count <= 10){
            driveLight.style.background = 'gray';
            cautionLight.style.background = 'orange';
            stopLight.style.background = 'gray';
            speed.style.color = 'wheat'
            speed.innerText = '40km/hr'
        }
        if(count > 10 && count <= 14){
            driveLight.style.background = 'gray';
            cautionLight.style.background = 'gray';
            stopLight.style.background = 'red';
            speed.style.color = 'red'
            speed.innerText = 'STOP!!'
        }
    
        if(count == 14){
            count = 0;
          
        }
    }, 1000);
}




















   
