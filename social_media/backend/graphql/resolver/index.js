const postsResolvers = require('./post');
const usersResolvers = require('./Users');
const commentsResolvers = require('./comment');

module.exports = {
    Post: {
      likeCount: (parent) => parent.likes.length,
      commentCount: (parent) => parent.comments.length
    },
    Query: {
      ...postsResolvers.Query
    },
    Mutation: {
      ...usersResolvers.Mutation,
      ...postsResolvers.Mutation,
      ...commentsResolvers.Mutation
    },
    Subscription: {
      ...postsResolvers.Subscription
    }
  };
  