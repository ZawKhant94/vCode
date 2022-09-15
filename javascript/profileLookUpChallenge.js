// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let contactProp = null
    for (let i = 0; i < contacts.length; i++) {
        // check there is a name in contacts 
        if (contacts[i].firstName == name || contacts[i].lastName == name) {
            if (contacts[i].hasOwnProperty([prop])) {
                contactProp = contacts[i][prop]
                return contactProp
            }
            else {
                return "No such property"
            }
        }



    }
    return "No such contact"











    // Only change code above this line
}

lookUpProfile("Akira", "likes");