import { useCollection } from "react-firebase-hooks/firestore"; 
import { db } from "../firebase";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";

import { ChatAltIcon , ShareIcon, ThumbUpIcon} from "@heroicons/react/outline";



function Posts() {
    const[realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );
    return (
        <div>
            
           {realtimePosts?.docs.map((post) => ( 
                <div style={{ width: "100%", margin: "15px auto", background: "#f0f2f5", borderRadius: "10px", boxshadow:"0 1px 2px rgba(0, 0, 0, 0.3)"}} >
                
                  <div key={post.id} className="empty">
                    <div style={{display: "flex", alignItems: "center"}}>
                      <div style={{  width: "35px", height: "35px", borderRadius: "70%", overflow: "hidden"}}>
                        <img style={{  width: "100%",height: "100%",objectFit: "cover"}} src={post.data().image}  />
                      </div>
                      <div style={{  marginLeft: "12px",fontWeight: "600"}}>
                      {post.data().name} 
                      </div>
                    </div>
                    <div style={{  width: "100%",display: "flex",flexDirection: "column"}}>
                      <div style={{  width: "100%",margin: "12px 0"}}>{post.data().message}</div>
                      <div className="show__body-img">
                        <img style={{  width: "100%",height: "100%"}} src={post.data().postImage} alt="post" />
                      </div>
                    </div>
                    <div className="flex justify-evenly p-3 border-1">
                <div className="inputIcon" >
                    <ThumbUpIcon className="h-6 text-red-500" />
                    <p className="text-xs sm:test-sm xl:text-base">Like</p>
                </div>
                <div  className="inputIcon">
                    <ChatAltIcon className="h-6 text-green-400"/>
                    <p className="text-xs sm:test-sm xl:text-base">Comments</p>
                  
                </div>
                <div className="inputIcon">
                    <ShareIcon className="h-6 text-yellow-300"/>
                    <p className="text-xs sm:test-sm xl:text-base">Share</p>
                </div>
            </div>
                  </div>
                
              </div>
             
                
                
            ))}
           
           
      
        </div>
        
    );
}

export default Posts;


        