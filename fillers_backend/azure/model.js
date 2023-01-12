const execQuery = require('./execQuery');
const TYPES = require('tedious').TYPES;
 
const addPartner = (partnerData) => {
    const {
        partnerID,
        name,
        interest,
        email
    } = partnerData;

    const query = `
        INSERT INTO [dbo].[Partners] (PartnerID, Name, Interest, Email)
        VALUES (@partnerID, @name, @interest, @email)
    `;

    const parameters = [
        {name: 'partnerID', type: TYPES.UniqueIdentifier, value: partnerID},
        {name: 'name', type: TYPES.VarChar, value: name},
        {name: 'interest', type: TYPES.VarChar, value: interest},
        {name: 'email', type: TYPES.VarChar, value: email}
    ];

    return execQuery.execWriteCommand(query, parameters);
}

const updatePartner = (partnerData) => {
    const {
        partnerID,
        name,
        interest,
        email
    } = partnerData;

    const query = `
        UPDATE [dbo].[Partners]
        SET Name=@name, Interest=@interest, Email=@email
        WHERE PartnerID=@partnerID
    `;

    const parameters = [
        {name: 'partnerID', type: TYPES.UniqueIdentifier, value: partnerID},
        {name: 'name', type: TYPES.VarChar, value: name},
        {name: 'interest', type: TYPES.VarChar, value: interest},
        {name: 'email', type: TYPES.VarChar, value: email}
    ];

    return execQuery.execWriteCommand(query, parameters);
}

const deletePartner = (partnerID) => {
    const query = `
        DELETE FROM [dbo].[Partners]
        WHERE PartnerID=@partnerID
    `;

    const parameters = [
        {name: 'partnerID', type: TYPES.UniqueIdentifier, value: partnerID}
    ];

    return execQuery.execWriteCommand(query, parameters);
}

const getAllPartners = () => {
    const query = `
        SELECT * FROM [dbo].[Partners]
    `;
    
    return execQuery.execReadCommand(query);
}

const getPartnerByID = (partnerID) => {
    const query = `
    SELECT * FROM [dbo].[Partners]
    WHERE PartnerID=@partnerID 
    `;

    const parameters = [
        {name: 'partnerID', type: TYPES.UniqueIdentifier, value: partnerID}
    ]

    return execQuery.execReadCommand(query, parameters);
};

module.exports = {
    addPartner,
    updatePartner,
    deletePartner,
    getAllPartners,
    getPartnerByID
}