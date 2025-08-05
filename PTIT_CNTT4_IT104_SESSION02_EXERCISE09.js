const student={
    name:"Dev",
    age:20,
    listMonhoc:[
        {subject:"Math",score:9},
        {subject:"English",score:7.5},
        {subject:"Physics",score:6},
        {subject:"Literature",score:8.5},

    ]
};
const displayStudentInfo=({name,age,listMonhoc})=>{
    console.log(`${name} is ${age} years old.`);
    // tinh diem trung binh
    const total = listMonhoc.reduce((sum,{score})=>sum+score,0);
    const avg =(total/listMonhoc.length).toFixed(2);
    // xep loai
    let rank="";
    if(avg>=8.5) rank="Hoc sinh gioi";
    else if (avg>=7) rank ="Hoc sinh kha";
    else if(avg>=5) rank ="Hoc sinh trung binh";
    else rank ="Hoc sinh yeu";
    console.log((`Average score:${avg}->${rank}`));
    // mon diem cao nhat
    const bestSubject = listMonhoc.reduce((best,current)=>
    current.score > best.score ? current : best
    );
    // mon diem thap nhat
    const weakestSubject = listMonhoc.reduce((worst,current)=>
    current.score < worst.score ? current:worst
    );
    console.log(`Best subject:${bestSubject} (${bestSubject.score})`);
    console.log(`Weakest subject:${weakestSubject.subject} (${weakestSubject.score})`);
}
displayStudentInfo(student);