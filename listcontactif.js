
let usermenu = prompt("Choose an option: a) first contact, b) last contact, c) add contact ")
let newcontact = prompt("name: ,phone: ,email: ")
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

if (usermenu === 'a'){
    alert(contacts[0])
    console.log(contacts[0]);
}
else if(usermenu === 'b'){
    alert(contacts.length -1)
    console.log(contacts.length -1);
}
if (usermenu ==='c'){
    newcontact = contacts.push()
    console.log(newcontact);
    alert(newcontact)
}
