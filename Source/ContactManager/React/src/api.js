var baseAddress = 'http://localhost:51055';

export async function getContact(contactId) {
    return await fetch(baseAddress + '/api/contacts/' + contactId)
        .then(response => {
            return response.json()
                .then(parsed => {
                    return parsed;
                });
        });
}

export async function getContacts(userId, searchCriteria) {
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
    return await fetch(baseAddress + 'api/contacts/add' + userId, {
        body: JSON.stringify(contact),
        method: 'POST',
        header: {
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

export function updateContact(contactId, newContact) {
    return await fetch(baseAddress + 'api/contacts/update' + contactId, {
        body: JSON.stringify(newContact),
        method: 'POST',
        header: {
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

export function deleteContact(contactId) {
    return await fetch(baseAddress + 'api/contacts/delete/' + contactId, {
        method: 'DELETE',
        header: {
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

export function addUser(user) {
    return await fetch(baseAddress + 'api/users/add', {
        body: JSON.stringify(user),
        method: 'POST',
        header: {
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

export function login(user) {
    return await fetch(baseAddress + 'api/users/login/', {
        body: JSON.stringify(user),
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