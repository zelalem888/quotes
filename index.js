var allofthem = ["The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.","If life were predictable it would cease to be life, and be without flavor","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.","Life is what happens when you're busy making other plans.","Spread love everywhere you go. Let no one ever come to you without leaving happier.","When you reach the end of your rope, tie a knot in it and hang on.","Always remember that you are absolutely unique. Just like everyone else."]
var allofthemare = ["Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt","Oprah Winfrey","James Cameron","John Lennon","Mother Teresa","Franklin D. Roosevelt","Margaret Mead"]




var qoutes1 = document.querySelector('.hedden');
var qoutes2 = document.querySelector('.hedden2')




const init = document.querySelector('.ref');
 
init.addEventListener("click",()=>{
    
    var shorts = Math.floor(Math.random() *10);

    var alls = allofthem[shorts] ;
    var allss = allofthemare[shorts];
    qoutes1.innerHTML = alls;
    qoutes2.innerHTML = allss;



})















