// Ye humara dummy comments data hai - Naruto, Luffy, Goku waghera characters ke comments
// (Isme koi change nahi kiya gaya, bas neeche styling improve ki hai)
const commentsData = [
  {
    name: "Naruto Uzumaki",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Naruto",
    text: "This video is really helpful! 🔥",
    replies: [
      {
        name: "Sasuke Uchiha",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sasuke",
        text: "Yeah, I learned a lot from this!",
        replies: [
          {
            name: "Naruto Uzumaki",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Naruto2",
            text: "Same! The explanation was really simple.",
            replies: [],
          },
        ],
      },
      {
        name: "Sakura Haruno",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sakura",
        text: "The examples were easy to understand.",
        replies: [],
      },
    ],
  },

  {
    name: "Monkey D. Luffy",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Luffy",
    text: "This was awesome! 😍",
    replies: [
      {
        name: "Roronoa Zoro",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Zoro",
        text: "Definitely worth watching.",
        replies: [
          {
            name: "Sanji",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sanji",
            text: "Agreed! Very well explained.",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    name: "Goku",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Goku",
    text: "Can you make a video about Redux next?",
    replies: [
      {
        name: "Vegeta",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Vegeta",
        text: "That would be a great topic.",
        replies: [
          {
            name: "Goku",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Goku2",
            text: "Yes! I'm waiting for that video. 🔥",
            replies: [],
          },
          {
            name: "Gohan",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Gohan",
            text: "I would also like to learn Redux.",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    name: "Light Yagami",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Light",
    text: "The explanation was very clear and simple.",
    replies: [
      {
        name: "L Lawliet",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=L",
        text: "I agree. The concepts were explained nicely.",
        replies: [
          {
            name: "Light Yagami",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Light2",
            text: "Exactly! Especially the practical examples.",
            replies: [],
          },
        ],
      },
      {
        name: "Misa Amane",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Misa",
        text: "Loved this video! ❤️",
        replies: [],
      },
    ],
  },

  {
    name: "Tanjiro Kamado",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Tanjiro",
    text: "Watching this again because I missed a few concepts. 😅",
    replies: [
      {
        name: "Nezuko Kamado",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Nezuko",
        text: "Same! Rewatching makes it much easier.",
        replies: [
          {
            name: "Zenitsu Agatsuma",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Zenitsu",
            text: "I understood it better on the second watch too! 😂",
            replies: [],
          },
        ],
      },
      {
        name: "Inosuke Hashibira",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Inosuke",
        text: "This video was amazing! 🔥",
        replies: [],
      },
    ],
  },
];

// Ek single comment ka card - naam, image aur text dikhata hai
// Styling thoda clean aur soft kar di hai, logic same hi hai
const Comment = ({ data }) => {
  const { name, text, replies, image } = data;
  return (
    <div className="flex gap-3 bg-white p-3 m-2 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer">
      {/* User ka avatar image */}
      <img
        className="w-10 h-10 rounded-full ring-2 ring-slate-100 shrink-0"
        src={image}
        alt="user"
      />
      <div className="px-1">
        <h3 className="font-semibold text-slate-800 text-sm">{name}</h3>
        <p className="text-slate-600 text-sm mt-0.5">{text}</p>
      </div>
    </div>
  );
};

// Recursive component - comment ke andar replies aur unke andar replies dikhata hai
// Isi wajah se nested comments ka tree banta hai (logic bilkul waisa hi hai jaisa pehle tha)
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* Agar replies hain to unhe thoda indent karke, left side pe halki line ke saath dikhate hain */}
      {comment.replies.length > 0 && (
        <div className="pl-6 ml-6 border-l-2 border-slate-200">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

// Sabse bahar wala wrapper - "Comments" heading aur poori list ko ek card ke andar rakhta hai
const CommentsContainer = () => {
  return (
    <div className=" p-4 m-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
      <h1 className="text-lg font-bold text-slate-800 px-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;