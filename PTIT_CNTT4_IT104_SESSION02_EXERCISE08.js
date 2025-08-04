const displayUserInfo =(user)=>{
    const{
        name,
        age,
        location:{city,country},
        contact={},
        job={}
    
} = user;
const email = contact.email ?? "unknown";
const phone = contact.phone ?? "unknown";
const title = contact.title ?? "unknown";
const company = contact.company ?? "unknown";
return `${name} is ${age} years old , live in ${city},${country},works as ${title} at ${company}, can be connected via ${email} or ${phone}.`;

};
console.log(
    displayUserInfo({
        name:"Anna",
        age:30,
        location:{city:"Da Nang",country:"Viet Nam"}
    })
);
console.log(
    displayUserInfo({
        name:"John",
        age:25,
        location:{city:"Hanoi",country:"Viet Nam"},
        contact:{email:"john@gmail.com",phone:"0123456789"},
        job:{title:"Developer",company:"tech Corp"}
    })
);

