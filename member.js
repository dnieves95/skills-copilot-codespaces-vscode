function skillsMember() {
    return {
        name: "member",
        description: "Member commands",
        options: [
            {
                name: "add",
                description: "Add a member to the group",
                type: 1,
                options: [
                    {
                        name: "user",
                        description: "The user to add to the group",
                        type: 6,
                        required: true
                    }
                ]
            },
            {
                name: "remove",
                description: "Remove a member from the group",
                type: 1,
                options: [
                    {
                        name: "user",
                        description: "The user to remove from the group",
                        type: 6,
                        required: true
                    }
                ]
            },
            {
                name: "list",
                description: "List all members of the group",
                type: 1
            }
        ]
    };
}