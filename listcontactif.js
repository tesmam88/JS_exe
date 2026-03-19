
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let usermenu = prompt("Choose an option: a) first contact, b) last contact, c) add contact ")

if (usermenu === 'a'){
    alert(`${contacts[0].name} , ${contacts[0].phone} , ${contacts[0].email}`)
    console.log(contacts[0]);
}
else if(usermenu === 'b'){
    let last = contacts[contacts.length -1];
    alert(`${last.name} , ${last.phone} , ${last.email}`)
    console.log(last);
}
else if (usermenu ==='c'){
    let name = prompt("put your name: ")
    let phone = prompt("put you phone: ")
    let email = prompt("put your email: ")

    contacts.push({
    name:name,
    phone:phone,
    email:email})
    
    console.log(contacts);
    alert("add new contact")    

};

