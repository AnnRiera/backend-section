let _commentservice = null;

class CommentController {
    constructor({ CommentService }) {
        _commentservice = CommentService; //Sin el this es tipo privado.
    }

    async get(req, res) {
        const { commentId } = req.params;
        const comment = await _commentservice.get(commentId);
        return res.send(comment);
    }

    async update(req, res) {
        const { body } = req;
        const commentId = req.params;
        const updatedComment = await _commentservice.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res) {
        const { commentId } = req.params;
        const deletedComment = await _commentservice.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeasComments(req, res) {
        const { ideaId } = req.params;
        const comments = await _commentservice.getIdeasComments(ideaId);
        return res.send(comments);
    }

    async createComment(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const createdComment = await _commentservice.create(body, ideaId);
        return res.status(201).send(createdComment);
    }
}

module.exports = CommentController;