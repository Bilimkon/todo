const Todo = require("../models/todo");

exports.createTodo = (req, res, next) => {
  const todo = new Todo({
    title: req.body.title,
    content: req.body.content,
    date: new Date,
    done: true
  });
  todo.save().then(result => {
    res.status(200).json({
      message: "Todo is added successfully",
      post: {
        ...result,
        id: result._id
      }
    });
  }).catch(error => {
    res.status(500).json({
      message: "Failed!"
    });
  });
};

exports.getTodo = (req, res, body) => {
  Todo.find()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
}
exports.deleteTodo = (req, res, next) => {
  Todo.deleteOne({_id: req.params.id }).then(result => {
      res.status(200).json({message: "Deletion successful!"});
  }).catch(error => {
    res.status(500).json({
      message: "Deleting post failed!"
    });
  });
}
