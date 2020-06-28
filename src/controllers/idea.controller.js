let _ideaservice = null;

class IdeaController {
    constructor({ IdeaService }) {
        _ideaservice = IdeaService; //Sin el this es tipo privado.
    }

    async get(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaservice.get(ideaId);
        return res.send(idea);
    }

    async getAll(req, res) {
        const ideas = await _ideaservice.getAll();
        return res.send(ideas);
    }

    async create(req, res){
        const {body} = req;
        const createdIdea = await _ideaservice.create(body);
        return res.status(201).send(createdIdea);
    }

    async update(req, res) {
        const { body } = req;
        const ideaId = req.params;
        const updatedIdea = await _ideaservice.update(ideaId, body);
        return res.send(updatedIdea);
    }

    async delete(req, res) {
        const { ideaId } = req.params;
        const deletedIdea = await _ideaservice.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdeas(req, res){
        const { userId } = req.params;
        const ideas = await _ideaservice.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upvoteIdea(req, res){
        const { ideaId } = req.params;
        const idea = await _ideaservice.upvoteIdea(ideaId);
        return res.send(idea);
    }

    async downvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaservice.downvoteIdea(ideaId);
        return res.send(idea);
    }
}

module.exports = IdeaController;