// danh ba rong ban dau
const phoneBooks=[];
// ham them lien he
function addContact(name,phone,email){
    const contact={
        name,
        phone,
        email
    };
    phoneBooks.push(contact);
}
// ham hien thi danh ba
function displayContact(){
    if(phoneBooks.length==0){
        console.log("danh ba trong");
        return;
        
    }
    console.log("====Danh ba lien he====");
    phoneBooks.forEach((contact,index)=>{
        console.log(`${index+1}. Ten :${contact.name}`);
        console.log(`   SDT:${contact.phone}`);
        console.log(`   Email:${contact.email}`);
    });    
}
addContact("Nguyen Quang Vinh","094766543","Vinh@gmail.com")
addContact("Nguyen Trong Hung","0983645124","Hung@gmail.com");
displayContact();