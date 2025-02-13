function skillMember() {
    return {
        name: 'member',
        description: 'Get the list of members of a group or a channel.',
        options: [
            {
                name: 'group_id',
                description: 'The group or channel ID.',
                type: 3,
                required: true,
            },
        ],
        type: 1,
    };
}