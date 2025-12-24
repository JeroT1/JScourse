const userInfo = ({ name, commentQuantity }) => {
    if (!commentQuantity) return `User ${name} has no comments`;
    return `User ${name} has ${commentQuantity} comments`;
  };
  const profile = { name: "Alice", commentQuantity: 5 };
  console.log(userInfo(profile)); // "User Alice has 5 comments"