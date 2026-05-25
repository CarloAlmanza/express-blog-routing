const posts = require("../data/posts");

// INDEX
const index = (req, res) => {
    res.json({
        message: "Lista dei post",
        data: posts,
    });
};

// SHOW
const show = (req, res) => {
    const postId = parseInt(req.params.id);

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return res.status(404).json({
            error: "Post non trovato",
        });
    }

    res.json({
        message: `Dettaglio del post ${postId}`,
        data: post,
    });
};

// CREATE
const store = (req, res) => {
    res.json({
        message: "Creazione nuovo post",
    });
};

// UPDATE
const update = (req, res) => {
    const postId = req.params.id;

    res.json({
        message: `Modifica totale del post ${postId}`,
    });
};

// MODIFY
const modify = (req, res) => {
    const postId = req.params.id;

    res.json({
        message: `Modifica parziale del post ${postId}`,
    });
};

// DELETE
const destroy = (req, res) => {
    const postId = req.params.id;

    res.json({
        message: `Cancellazione del post ${postId}`,
    });
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};