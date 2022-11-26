import { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Comment({ slug }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [RecentComment, setRecentComment] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();
    const data = db.collection("comments").doc(slug);
    data.get().then((doc) => {
      if (doc.exists) {
        setCommentData(doc.data().comments);

        setRecentComment(doc.data().comments.slice(-3));
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const handleModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      setShowModal(false);
      document.body.style.overflow = "auto";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = firebase.firestore();

      const docref = db.collection("comments").doc(slug);

      if (Name === "" || Email === "" || Comment === "") {
        alert("Please fill all the fields");
      } else {
        docref.get().then((doc) => {
          if (doc.exists) {
            docref.update({
              comments: firebase.firestore.FieldValue.arrayUnion({
                name: Name,
                email: Email,
                comment: Comment,
                timestamp: new Date(),
              }),
            });
          } else {
            docref.set({
              comments: [
                {
                  name: Name,
                  email: Email,
                  comment: Comment,
                },
              ],
            });
          }
        });

        toast.success("Comment added successfully");

        setName("");
        setEmail("");
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col w-full md:w-1/2 items-center">
        <h1>
          <span className="text-2xl font-bold">Leave a comment</span>
        </h1>
        <div className="w-full flex flex-row">
          <input
            type="text"
            placeholder="Name"
            className="w-1/2 h-12 border-2 border-slate-400 rounded-md my-3 p-2 bg-white mr-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={Name}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-1/2 h-12 border-2 border-slate-400 rounded-md my-3 p-2 bg-white mr-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={Email}
          />
        </div>
        <textarea
          placeholder="Comment"
          className="w-full h-40 border-2 border-slate-400 rounded-md my-3 p-2 bg-white"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={Comment}
        ></textarea>
        <button
          className="mt-5 w-1/2 h-12 bg-[#6776FF] rounded-md text-white font-bold hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-center mt-7 md:mt-0">
        <h1>
          <span className="text-2xl font-bold">Recent Comments</span>
        </h1>

        {RecentComment.map((item, index) => {
          return (
            <div
              className="flex flex-col w-4/5 h-fit my-3
            border-2 border-slate-400 rounded-md p-2"
            >
              <span className="font-bold text-md">{item.name}</span>
              <span className="text-sm">{item.comment}</span>
            </div>
          );
        })}

        <button
          className="mt-5 w-1/2 h-12 bg-[#6776FF] rounded-md text-white font-bold hover:bg-blue-600"
          onClick={handleModal}
        >
          Read More..
        </button>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
          border-2 border-slate-300 shadow-md shadow-white"
            id="myModal"
          >
            <div className="relative w-3/4 my-6">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">All Comments</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <span className=" text-black h-12 w-12 text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div
                  className="relative p-6 flex-auto overflow-y-auto
                  overflow-x-hidden h-[500px] scroll-smooth"
                >
                  {commentData.map((item, index) => {
                    return (
                      <div
                        className="flex flex-col w-7/12 h-fit my-3
                    border-2 border-slate-400 rounded-md p-2"
                      >
                        <span className="font-bold text-md">{item.name}</span>
                        <span className="text-sm">{item.comment}</span>
                      </div>
                      
                    );
                  })}
                   
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
