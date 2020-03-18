const News = mongoose.model('news');

module.exports = app => {

    app.get('/', function (req, res) {
        res.send('hello world')
      })
      
    app.get('/api/groups', async (req, res) => {
        const savedGroups = await News.find({})
    
        res.send({ groups: savedGroups});
    });

    app.post('/api/group', async (req, res) => {
        try {
            await new News({ 
                groupName: req.body.name,
                articles: req.body.articles
            }).save()
    
            const savedArticles = await News.find({})
            res.status(200).send({ groups: savedArticles});
        } catch (error) {
            res.status(404).send({ errors: error});
        }
    });
    
}