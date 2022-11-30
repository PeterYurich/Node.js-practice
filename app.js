const contacts = require("./bd")

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.getAll()
            console.log(allContacts);
            break;
        case "getById":
            const oneContact = await contacts.getById(id)
            console.log(oneContact)
            break;
        case "add":
            const newContact = await contacts.add({name, email, phone})
            console.log(newContact)
            break;
        case "updateById":
            const updatedContact = await contacts.updateById(id, {name, email, phone})
        case "removeById":
            const deletedContact = await contacts.removeById(id)
            console.log(deletedContact)
        default:
            console.log("unknown action")
    }
}

// invokeAction({action: "list"})

// invokeAction({action: "getById", id: "3714"})

// invokeAction({action: "add", name: "Karog", email: "peteryurich@gmail.com", phone: "0951224700"})

// invokeAction({action: "updateById", id: "1", name: "newOne", email: "new@gmail.com", phone: "123123123"})

// invokeAction({action: "removeById", id: "6"})