var baseAddress = 'http://localhost:51055';

export async function getContacts(userId) {
    return await fetch(baseAddress + '/api/contacts/' + userId)
        .then(response => {
            return response.json()
                .then(parsed => {
                    return parsed;
                });
        });
}

export async function searchContacts(userId, searchCriteria) {
    return await fetch(baseAddress + '/api/contacts/search/' + userId, {
        body: JSON.stringify(searchCriteria),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
                .then(parsed => {
                    console.log(parsed);
                    return parsed;
                });
        });
}

export function addContact(userId, contact) {

}

export function updateContact(contactId, newContact) {

}

export function deleteContact(contactId) {

}