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

while (true) {
    let choice = prompt("O que deseja fazer? (first / last / all / new / quit)");

    if (choice === "first") {
        let c = contacts[0];
        alert(`Nome: ${c.name}\nTelefone: ${c.phone}\nEmail: ${c.email}`);

    } else if (choice === "last") {
        let c = contacts[contacts.length - 1];
        alert(`Nome: ${c.name}\nTelefone: ${c.phone}\nEmail: ${c.email}`);

    } else if (choice === "all") {
        for (let c of contacts) {
            alert(`Nome: ${c.name}\nTelefone: ${c.phone}\nEmail: ${c.email}`);
        }

    } else if (choice === "new") {
        let name  = prompt("Digite o nome:");
        let phone = prompt("Digite o telefone:");
        let email = prompt("Digite o email:");
        contacts.push({ name, phone, email });
        alert("Contato adicionado com sucesso!");

    } else if (choice === "quit") {
        alert("Encerrando o programa. Até mais!");
        break;

    } else {
        alert("Opção inválida! Use: first, last, all, new ou quit");
    }
}