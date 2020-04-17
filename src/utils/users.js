const users = [];

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // valdiating the data
    if (!username || !room) {
        return {
            error: 'username and room are reduired'
        }
    }

    // Check for existing User
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room;
    })

    // Validate Username
    if (existingUser) {
        return {
            error: 'Username is exist'
        }
    }

    // Store User
    const user = { id, username, room };
    users.push(user);
    return { user };

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) =>  user.id === id )
};

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room)
};


module.exports = {
    addUser,
    removeUser,
    getUser, 
    getUserInRoom
}; 