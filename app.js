const contacts = require("./bd")
const { program } = require("commander")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.getAll()
            console.log(allContacts);
            break;
        case "getById":
            const oneContact = await contacts.getById(id)
            console.log(oneContact)
            break;
        case "add":
            const newContact = await contacts.add({ name, email, phone })
            console.log(newContact)
            break;
        case "updateById":
            const updatedContact = await contacts.updateById(id, { name, email, phone })
        case "removeById":
            const deletedContact = await contacts.removeById(id)
            console.log(deletedContact)
        default:
            console.log("unknown action")
    }
}

program
    .option("-a, --action <type>")
    .option("i, --id <type>")
    .option("-n, --name <type>")
    .option("--email <type>")
    .option("--phone <type>")

program.parse() //перетворює  значення змынної program з масиву на об'єкт

const options = program.opts()

invokeAction(options)