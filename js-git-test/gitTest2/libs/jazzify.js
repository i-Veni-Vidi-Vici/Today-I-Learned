

const jazzify = (arr) =>{

    return arr.map((val, index)=>{ 
        return (!val.endsWith(7)) ? val+7: val;
     })


    // arr.forEach((element,index) => {
    //     if(!element.endsWith(7))
    //         arr[index]+=7;
    // });

    // arr.filter((val, index)=>{ 
    //     if(!val.endsWith(7)) 
    //         arr[index]+=7; 
    //  })
 
}

module.exports = jazzify;