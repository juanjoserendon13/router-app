const initialState = {
  users: [],
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum maiores totam vel ab. Aspernatur at totam in placeat minus aperiam assumenda repudiandae recusandae. Ipsum voluptatem accusamus id animi repellendus."
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum maiores totam vel ab. Aspernatur at totam in placeat minus aperiam assumenda repudiandae recusandae. Ipsum voluptatem accusamus id animi repellendus."
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum maiores totam vel ab. Aspernatur at totam in placeat minus aperiam assumenda repudiandae recusandae. Ipsum voluptatem accusamus id animi repellendus."
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
