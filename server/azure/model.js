const execQuery = require('./execQuery');
const TYPES = require('tedious').TYPES;
 
const addPartner = (partnerData) => {
    const {
        partnerID,
        name,
        email,
        telephone,
        country,
        message,
        datetime
    } = partnerData;

    const query = `
        INSERT INTO [dbo].[Partners] (PartnerID, Name, Email, Telephone, Country, Message, DateTime)
        VALUES (@partnerID, @name, @email, @telephone, @country, @message, @datetime)
    `;

    const parameters = [
        {name: 'partnerID', type: TYPES.UniqueIdentifier, value: partnerID},
        {name: 'name', type: TYPES.VarChar, value: name},
        {name: 'email', type: TYPES.VarChar, value: email},
        {name: 'telephone', type: TYPES.VarChar, value: telephone},
        {name: 'country', type: TYPES.VarChar, value: country},
        {name: 'message', type: TYPES.VarChar, value: message},
        {name: 'datetime', type: TYPES.DateTime, value: datetime},
    ];

    return execQuery.execWriteCommand(query, parameters);
}

const updatetimePartner = (partnerData) => {
    const {
        partnerID,
        name,
        email,
        telephone,
        country,
        message,
        datetime
    } = partnerData;

    const query = `
        UPDATE [dbo].[Partners]
        SET Name=@name, Email=@email, Telephone=@telephone, Country=@country, Message=@message, DateTime=@datetime
        WHERE PartnerID=@partnerID
    `;

    const parameters = [
        {name: 'partnerID', type: TYPES.UniqueIdentifier, value: partnerID},
        {name: 'name', type: TYPES.VarChar, value: name},
        {name: 'email', type: TYPES.VarChar, value: email},
        {name: 'telephone', type: TYPES.VarChar, value: telephone},
        {name: 'country', type: TYPES.VarChar, value: country},
        {name: 'message', type: TYPES.VarChar, value: message},
        {name: 'datetime', type: TYPES.DateTime, value: datetime},
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
    updatetimePartner,
    deletePartner,
    getAllPartners,
    getPartnerByID
}