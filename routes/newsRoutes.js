const mongoose = require('mongoose');
const Feeds = mongoose.model('feeds');

module.exports = app => {

    app.get('/api/groups', async (req, res) => {
        const savedGroups = await Feeds.find({})
    
        res.send({ groups: savedGroups});
    });

    app.post('/api/group', async (req, res) => {
        try {
            await new Feeds({ 
                title: req.body.title,
                description: req.body.description,
                urlToImage: req.body.urlToImage,
                url: req.body.url
            }).save()
    
            const savedArticles = await Feeds.find({})
            res.status(200).send({ groups: savedArticles});
        } catch (error) {
            res.status(404).send({ errors: error});
        }
    });
    
}