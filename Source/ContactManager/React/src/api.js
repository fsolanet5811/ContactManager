﻿var baseAddress = 'http://poosdcontactmanager.azurewebsites.net';
//var baseAddress = 'http://localhost:51055' ;

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

export async function addContact(userId, contact) {
    return await fetch(baseAddress + '/api/contacts/add/' + userId, {
        body: JSON.stringify(contact),
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

export async function updateContact(contactId, newContact) {
    return await fetch(baseAddress + '/api/contacts/update/' + contactId, {
        body: JSON.stringify(newContact),
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

export async function deleteContact(contactId) {
    await fetch(baseAddress + '/api/contacts/delete/' + contactId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function addUser(user) {
    return await fetch(baseAddress + '/api/users/add', {
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

export async function login(user) {
    return await fetch(baseAddress + '/api/users/login/', {
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