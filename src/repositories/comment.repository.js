const BaseRepository = require("./base.repository");
let _comment = null;


class CommentRepository extends BaseRepository {
    constructor({ Comment }) {
        super(Idea);
        _comment = Comment;
    }
}

module.exports = CommentRepository;