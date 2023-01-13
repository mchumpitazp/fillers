const partnerRoute = require('express').Router();
const {v4: uuidv4} = require('uuid');
const partnerModel = require('./model.js');

partnerRoute.get('/', async(req, res) => {
    partnerModel.getAllPartners()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});
    })
})

partnerRoute.get('/:id', async(req, res) => {
    const {id: partnerID} = req.params;
    partnerModel.getPartnerByID(partnerID)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json({data: {...data[0]}});
        }
        else {
            res.status(500).json({error: 'Partner not found.'});
        }
    })
    .catch(error => {
        res.status(500).json({error});
    })
})

partnerRoute.post('/', async(req, res) => {
    const partnerID = uuidv4();
    const datetime = new Date();

    const {
        name,
        email,
        telephone,
        country,
        message,
    } = req.body;

    partnerModel.addPartner({
        partnerID,
        name,
        email,
        telephone,
        country,
        message,
        datetime
    })
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    }, (err) => next(err))
    .catch((err) => next(err));
})

partnerRoute.put('/:id', async(req, res) => {
    const {id: partnerID} = req.params;
    const datetime = new Date();

    const {
        name,
        email,
        telephone,
        country,
        message,
    } = req.body;

    partnerModel.updatePartner({
        partnerID,
        name,
        email,
        telephone,
        country,
        message,
        datetime
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                partnerID
            }
        })
    })
    .catch(error => {
        res.status(500).json({error});
    })

})

partnerRoute.delete('/:id', async(req, res) => {
    const {id: partnerID} = req.params;

    partnerModel.deletePartner(partnerID)
    .then((rowCount, more) => {
        res.status(200).json({rowCount, more})
    })
    .catch(error => {
        res.status(500).json({error});
    })
})

module.exports = partnerRoute;