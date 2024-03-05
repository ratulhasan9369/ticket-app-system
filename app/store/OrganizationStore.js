
// Define the static store
Ext.define('Ticket.store.OrganizationStore', {
    extend: 'Ext.data.Store',

    fields: ['id', 'name'],
    data: [
        { id: 1, name: 'Organization 1' },
        { id: 2, name: 'Organization 2' },
        { id: 3, name: 'Organization 3' }
        // Add more data as needed
    ]
});