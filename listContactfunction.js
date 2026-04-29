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

let showContact = function(contacts,index){
    // Verifica se contacts é um array
    if (!(contacts instanceof Array)) {
        console.log("Erro: o primeiro argumento deve ser um array.");
        return;
    }

    // Verifica se o index é um número válido
    if (typeof index !== "number" || index < 0 || index >= contacts.length) {
        console.log("Erro: índice inválido.");
        return;
    }

     // Exibe o contato encontrado no índice
    let contact = contacts[index];
    console.log("Nome: "     + contact.name);
    console.log("Telefone: " + contact.phone);
    console.log("Email: "    + contact.email);
};

let showAllContacts = function(contacts){
    if (!(contacts instanceof Array)) {
        console.log("Erro: o argumento deve ser um array.");
        return;
    }

    contacts.forEach(function(contact, index) {
        console.log("-- Contato " + (index + 1) + " --");
        console.log("Nome: "     + contact.name);
        console.log("Telefone: " + contact.phone);
        console.log("Email: "    + contact.email);
    });
}

let addNewcontact = function(contacts,name,phone,email){
    if(! (contacts instanceof Array)){
        console.log("Erro: o primeiro argumento deve ser um array.");
        return;
    }
    // Verifica se todos os dados têm valor
    if (!name || !phone || !email) {
        console.log("Erro: nome, telefone e email são obrigatórios.");
        return;
    }
    // Adiciona o novo contato
    contacts.push({ name: name, phone: phone, email: email });
    console.log("Contato '" + name + "' adicionado com sucesso!")
}

//showAllContacts(contacts);

//addNewcontact (contacts,"Tesmam","67559992220","jediforce@gmail.com");
//showAllContacts(contacts);

// Ordena pelo nome (A → Z)
contacts.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return  1;
    return 0;
});
console.log(contacts)