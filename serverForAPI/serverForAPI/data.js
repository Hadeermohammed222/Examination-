module.exports = ()=>{
    const data = {
                    questions:[],
                     answers:[]
                }
             for(let i =0;i<1000;i++){
                data.questions.push({
                    id:i
                })
             }
             for(let i =0;i<1000;i++){
                data.answers.push({
                    id:i
                })
             }
return data;
}
