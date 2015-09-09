'use strict';

var TodoModel = require('../models/Todo');

module.exports = function(router) {
    router.get('/todos', function(req, res) {
        var query = req.query;

        TodoModel.find(query, function(err, results) {
            if (err) { return res.status(500).send(err); }

            res.status(200).send(results);
        });
    });

    router.get('/todos/:id', function(req, res) {
        var TodoID = req.params.id;

        TodoModel.findById(TodoID, function(err, found) {
            if (err) { return res.status(500).send(err); }

            res.status(200).send(found);
        });
    });

    router.post('/todos', function(req, res) {
        var newTodo = req.body;

        TodoModel.create(newTodo, function(err, created) {
            if (err) { return res.status(500).send(err); }

            res.status(200).send(created);
        });
    });

    router.put('/todos/:id', function(req, res) {
        var TodoID = req.params.id;
        var updatedTodo = req.body;

        TodoModel.findByIdAndUpdate(TodoID, { $set: updatedTodo },
            function(err, found) {
                if (err) { return res.status(500).send(err); }

                TodoModel.findById(TodoID, function(err, updated) {
                    if (err) { return res.status(500).send(err); }

                    res.status(200).send(updated);
                });
            });
    });

    router.delete('/todos/:id', function(req, res) {
        var TodoID = req.params.id;

        TodoModel.findByIdAndRemove(TodoID, function(err, found) {
            if (err) { return res.status(500).send(err); }

            res.status(200).send(found);
        });
    });
};
