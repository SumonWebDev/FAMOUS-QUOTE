const quotes=[
    {
        name:'Albert Einstein',
        quote:'I have no special talent. I am only passionately curious.'
    },
    {
        name:'William Shakespeare',
        quote:'Wisely, and slow. They stumble that run fast.'
    },
    {
        name:' Mother Teresa',
        quote:'If you judge people, you have no time to love them.'
    },
    {
        name:'Gautam Buddha',
        quote:'All that we are is the result of what we have thought. '
    },
    {
        name:'Pluto',
        quote:'The greatest wealth is to live content with little.'
    },
]

let quoteBtn=document.querySelector('#quoteBtn');
let quote=document.querySelector('#quote');
let quoteAuthor=document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click',()=>{
    let number=Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[number].quote;
    quoteAuthor.innerHTML=quotes[number].name;
})