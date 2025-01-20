const button1=document.getElementById('btn1');
const jokecontent=document.getElementById('jokecontent');
const joke=document.getElementById('joke');

const button2=document.getElementById('btn2');
const advicecontent=document.getElementById('advicecontent');
//const advice=document.getElementById('advice');

const button3 = document.getElementById('btn3'); // Random image button
const imagecontent = document.getElementById('imagecontent');


button1.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke').then(function(response){
        button1.textContent="Next";
        jokecontent.textContent=response.data.setup;
        joke.textContent="";
        setTimeout(function(){
            joke.textContent=response.data.punchline;
        },5000);
    }).catch(function(error){
        console.log(error);
    });   
};


button2.onclick = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
            button2.textContent = "Next";
            const adviceText = response.data.slip.advice;
            advicecontent.textContent = adviceText;
        })
        .catch(function (error) {
            console.log(error);
        });
};

button3.onclick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            button3.textContent = "Next Image";
            const imageUrl = response.data.message;
            imagecontent.innerHTML = `<img src="${imageUrl}" alt="Random Dog" style="max-width: 100%; border-radius: 10px;">`;
        })
        .catch((error) => {
            console.error("Error fetching image:", error);
        });
};