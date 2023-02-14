const firstPh = "Knock knock"
const secondPh = "Who's there?";
const answ1List = ["Yoda lady","Europe.","You.","Interrupting cow.","To.","Cook.","A week.","Wah.","HIPAA.","Control freak.","Dejav.","Nobel.","Art.","Shamp.","Doctor.","Hike.","Yah.","Colin.","Who's there?","Thermos."];
const questionList = ["Yoda lady who?","Europe who?","You who?","Interrupting cow wh—","To who?","Cook who?","A week who?","Wah who?","HIPAA who? ","Con..","Dejav who?","Nobel who?","Art who?","Shamp who?","Doctor who?","Hike who?","Yah who?","Colin who?","Opportunity, and I don't knock twice!","Thermos who?"];
const answ2List = ["I didn't know you could yodel!","No, you're a poo!","Big summer blowout.","MOO!","It's to whom.","Yeah, you do sound kinda crazy.","Yeah, we coo'.","It is-a me Mario!","I'm sorry, I'm not authorized to release that information.", "Okay, now you say, 'Control freak who?'","Knock, knock.","There's no bell...that's why I knocked.","R2D2!","Does my hair really look that dirty?","Oh my gosh, I'm such a big fan!","I didn't know you liked Japanese poetry!","No, I use Google.","Colonization! Just kidding, colonizers don't knock before coming in.","...","Thermos be a better knock knock joke than this!"];
const jokelist = [answ1List,questionList,answ2List];

const jokeGenerator = () =>{
    let joke = [];
    let rand = Math.floor(Math.random()*answ1List.length);
    joke.push(firstPh);
    joke.push(secondPh);
    jokelist.forEach(list => {
        joke.push(list[rand]);
    });
    return joke;

}

const jokePrinter = () =>{
    let joke = jokeGenerator();
    joke.forEach((obj,index) =>{
        setTimeout(() =>{
            console.log(obj);
        }, index* 2000);
    });
}

jokePrinter();
